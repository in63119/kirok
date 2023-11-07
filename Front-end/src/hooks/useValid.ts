import { useEffect, useState } from "react";

const useValid = (changeValue: any) => {
  const [isValid, setIsValid] = useState({
    isName: false,
    isBirth: false,
  });

  useEffect(() => {
    const exp = /^[가-힣a-zA-Z]{2,6}$/;
    if (!exp.test(changeValue.name)) {
      setIsValid({ ...isValid, isName: false });
    } else {
      setIsValid({ ...isValid, isName: true });
    }
  }, [changeValue.name, isValid.isName]);

  useEffect(() => {
    const exp = /^[0-9]{8}$/;
    if (!exp.test(changeValue.birth)) {
      setIsValid({ ...isValid, isBirth: false });
    } else {
      setIsValid({ ...isValid, isBirth: true });
    }
  }, [changeValue.birth, isValid.isBirth]);

  return { isValid };
};

export default useValid;
