import React, { useState, useEffect } from 'react';

// recoil
import { useRecoilState, useRecoilValue } from 'recoil';
import { kidState } from '@kirok-fe/recoil/kidState';
import { kakaoState } from '@kirok-fe/recoil/kakaoState';

// apis
import { childRegistration } from '@kirok-fe/apis/kids';
import { getAllInstitution } from '@kirok-fe/apis/institution';

/* 
  이 파일은 테스트용으로 만들어봤던 파일임.
  테스트 내용: 프론트 구현 안되었을 때 기관에 아이 등록하는 API 
*/

const InputKids = () => {
	const [kid, setKid] = useRecoilState(kidState);
	const kakaoData = useRecoilValue(kakaoState);
	const [institutions, setIntitutions] = useState<string[] | null>(null);
	const [selectedOption, setSelectedOption] = useState<string[] | any>('');
	const [gender, setGender] = useState('');

	const institutionName = async () => {
		const result = await getAllInstitution();

		if (result) {
			setIntitutions(result);
		}
	};

	const handleChange = (e: any) => {
		setSelectedOption(e.target.value);
		setKid((prev: any) => ({
			...prev,
			institution: e.target.value,
		}));
	};

	const handleInputKidName = (value: string) => {
		setKid((prev: any) => ({
			...prev,
			name: value,
		}));
	};
	const handleInputBirth = (value: string) => {
		// 생년월일은 6자리 숫자 (Ex. 900109)
		setKid((prev: any) => ({
			...prev,
			birth: value,
		}));
	};

	const handleInputClick = async () => {
		if (kid.institution.length === 0 || kid.name.length === 0 || kid.birth.length === 0 || gender.length === 0) {
			alert('뭔가 비었네?');
		} else {
			const data: any = Object.assign({}, kid, kakaoData); // TODO: 왜 kid, kakao 데이터를 같이 두는거지...?
			data.gender = gender; // TODO: server 요청 시 타입 상세 필요.. 확장을 하는구만..
			delete data.isLogin;
			console.log('이렇게 보내요 : ', data);
			await childRegistration(data);
		}
	};

	useEffect(() => {
		institutionName();
	}, []);

	return (
		<div>
			<div>자녀 등록</div>
			<div>
				<select value={selectedOption} onChange={handleChange}>
					{institutions?.map((option: any) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
			</div>
			<input type="text" placeholder="아이 이름" onChange={(event) => handleInputKidName(event.target.value)} />
			<input type="text" placeholder="생년월일" onChange={(event) => handleInputBirth(event.target.value)} />
			<div>
				<input
					type="radio"
					name="option"
					value="남아"
					checked={gender === '남아'}
					onChange={(e) => setGender(e.target.value)}
				/>{' '}
				남아
				<input
					type="radio"
					name="option"
					value="여아"
					checked={gender === '여아'}
					onChange={(e) => setGender(e.target.value)}
				/>{' '}
				여아
			</div>
			<button onClick={handleInputClick}>등록 하기</button>
		</div>
	);
};

export default InputKids;
