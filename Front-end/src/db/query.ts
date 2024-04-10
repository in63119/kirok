import { initialization } from './firestore';
import { Firestore, collection, getDocs, query, getDoc, doc, setDoc } from 'firebase/firestore';

// Type
import { TinstitutionLogin } from '../utils/type';

/*
  Firestore 기능 모음
*/

export async function withFirestore<T>(operation: (db: Firestore) => Promise<T>): Promise<T | undefined> {
	try {
		const initializationResult = initialization();
		if (!initializationResult) {
			throw new Error('Database initialization failed');
		}
		const { db } = initializationResult;
		return operation(db);
	} catch (error) {
		console.error(error);
		return undefined;
	}
}

/*  
    getDocuments
    @dev param에 따라서 Documents 조회
	  @param(select : string) 
      1. "institution" => 모든 기관명 조회
      2. "user" => 유저의 아이디 조회
	  @returns => [string]
  */
export const getDocuments = (select: string) => {
	return withFirestore<string[]>(async (db) => {
		const result: string[] = [];
		const querySnapshot = await getDocs(collection(db, select));
		querySnapshot.forEach((doc) => {
			result.push(doc.id);
		});
		return result;
	});
};

/*  
    checkDoc
    @dev param에 따라서 특정 Document 존재 여부 리턴
	  @param(select : string, docName : string) 
      1. select
        "institution" => 특정 기관 확인
        "user" => 특정 유저 확인
      2. docName(조회할 문서의 ID)
        ex. "유랑단학원" or "3011940250"
	  @returns => boolean
  */
export const checkDoc = (select: string, docName: string) => {
	return withFirestore<boolean>(async (db) => {
		const document = doc(db, select, docName);
		const documentSnapshot = await getDoc(document);
		return documentSnapshot.exists();
	});
};

// 유저 추가
export const addUser = (kakaoId: string, kakaoEmail: string) => {
	return withFirestore<boolean>(async (db) => {
		const document = doc(db, 'user', kakaoId);
		const data = {
			email: kakaoEmail,
			'wallet-address': '',
			'wallet-name': '',
		};
		await setDoc(document, data);
		return document.id === kakaoId;
	});
};

// 자녀가 있는지 확인
export const getKids = (kakaoId: string, name: string) => {
	return withFirestore<boolean>(async (db) => {
		const q = query(collection(db, 'user', kakaoId, 'kids'));
		const querySnapshot = await getDocs(q);
		let result = false;
		querySnapshot.forEach((doc) => {
			if (doc.id === name) {
				result = true;
			}
		});
		return result;
	});
};

// 자녀가 기관에 등록 되있는지 확인
export const getKidRegistered = (kakaoId: string, name: string) => {
	return withFirestore<boolean | undefined>(async (db) => {
		const q = query(collection(db, 'user', kakaoId, 'kids'));
		const querySnapshot = await getDocs(q);
		let result;
		querySnapshot.forEach((doc) => {
			if (name === doc.id) {
				result = doc.data().isRegistered;
			}
		});
		return result;
	});
};

// 자녀 등록 & 수정
// export const setKid = (kakaoId: string, name: string, info: any) => {
// 	return withFirestore<boolean>(async (db) => {
// 		const docRef = doc(collection(db, 'user', kakaoId, 'kids'), name);
// 		await setDoc(docRef, info);
// 		return docRef.id === name;
// 	});
// };

// 기업 로그인
export const getInstitutionInfo = (data: TinstitutionLogin) => {
	return withFirestore(async (db) => {
		const result = {
			result: false,
			message: '',
			incorrectData: '',
			name: '',
		};

		const querySnapshot = await getDocs(collection(db, 'institution'));
		querySnapshot.forEach((doc) => {
			const innerData = doc.data();
			if (innerData.id === data.id) {
				if (innerData.password === data.password) {
					result.result = true;
					result.message = '정보가 일치합니다.';
					result.incorrectData = 'success';
					result.name = doc.id;
				} else {
					result.message = '비밀번호가 잘못됨.';
					result.incorrectData = 'password';
				}
			} else {
				result.message = '아이디가 잘못됨.';
				result.incorrectData = 'id';
			}
		});

		return result;
	});
};

// 기관 등록 요청 대기열에 추가
// export const registrationRequest = (info: any) => {
// 	return withFirestore(async (db) => {
// 		const docRef = doc(collection(db, 'institution', info.institution, 'RegistrationRequest'), info.name);
// 		await setDoc(docRef, info);
// 		return docRef.id === info.name;
// 	});
// };

// 아이가 기관 등록 대기열에 있는지 조회
// export const checkRegistrationRequest = (info: any) => {
// 	return withFirestore(async (db) => {
// 		let result = false;
// 		const q = query(collection(db, 'institution', info.institution, 'RegistrationRequest'));
// 		const querySnapshot = await getDocs(q);
// 		querySnapshot.forEach((doc) => {
// 			if (info.name === doc.id && info.birth === doc.data().birth && info.gender === doc.data().gender) {
// 				result = true;
// 			}
// 		});
// 		return result;
// 	});
// };
