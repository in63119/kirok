import { useState } from 'react';

const useValid = (changeValue: any) => {
	const [isValid] = useState({
		isName: false,
		isBirth: false,
	});

	console.log('changeValue', changeValue);

	// TODO: 무한 호출 오류 제거

	// useEffect(() => {
	// 	const exp = /^[가-힣a-zA-Z]{2,6}$/;
	// 	if (!exp.test(changeValue.name)) {
	// 		setIsValid({ ...isValid, isName: false });
	// 	} else {
	// 		setIsValid({ ...isValid, isName: true });
	// 	}
	// }, [changeValue.name, isValid]);

	// useEffect(() => {
	// 	const exp = /^[0-9]{8}$/;
	// 	if (!exp.test(changeValue.birth)) {
	// 		setIsValid({ ...isValid, isBirth: false });
	// 	} else {
	// 		setIsValid({ ...isValid, isBirth: true });
	// 	}
	// }, [changeValue.birth, isValid]);

	return { isValid };
};

export default useValid;
