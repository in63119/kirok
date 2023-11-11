import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { institutionState } from '../recoil/institutionState';

// DB
import { firestore } from '../utils/firestore';
import { onSnapshot, query, collection } from 'firebase/firestore';

/*
  이 파일은 Firebase에서 실시간으로 데이터 스냅샷 가져오는 파일
  용도: 기관에 등록요청 데이터가 추가되면 수락용
*/

interface RegistrationItem {
	birth: string;
	gender: string;
	institution: string;
	isRegistered: boolean;
	name: string;
}

const RegistrationRequest = () => {
	const institution = useRecoilValue(institutionState);
	const [realTimeRequest, setRealTimeRequest] = useState<RegistrationItem[]>([]);
	const q = query(collection(firestore, 'institution', `${institution.name}`, 'RegistrationRequest'));

	useEffect(() => {
		const unsubscribe = onSnapshot(
			q,
			(querySnapshot) => {
				const requests: RegistrationItem[] = [];

				querySnapshot.forEach((doc) => {
					const data: RegistrationItem = doc.data() as RegistrationItem;
					if (data) {
						requests.push(data);
					}
				});

				setRealTimeRequest(requests);
			},
			(err) => {
				console.log(err);
			},
		);

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<div>
			<div>{institution.name} 요청 데이터</div>
			{realTimeRequest.length === 0
				? null
				: realTimeRequest?.map((kid: any, i: number) => (
						<div key={i}>
							<div>
								{kid.name} {kid.gender} {kid.birth}
							</div>
						</div>
				  ))}
		</div>
	);
};

export default RegistrationRequest;
