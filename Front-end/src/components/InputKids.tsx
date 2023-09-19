import React, { useEffect } from "react";

// recoil
import { useRecoilState } from "recoil";
import { kidState } from "../recoil/kidState";

// apis
import { childRegistration } from "../apis/kids";

const InputKids = () => {
  const [kid, setKid] = useRecoilState(kidState);

  const handleInputInstitution = (value: string) => {
    setKid((prev: any) => ({
      ...prev,
      institution: value,
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
    if (
      kid.institution.length === 0 ||
      kid.name.length === 0 ||
      kid.birth.length === 0
    ) {
      alert("뭔가 비었네?");
    } else {
      await childRegistration();
    }
  };

  useEffect(() => {
    console.log(kid);
  }, [kid]);

  return (
    <div>
      <div>자녀 등록</div>
      <input
        type="text"
        placeholder="어린이집 이름"
        onChange={(event) => handleInputInstitution(event.target.value)}
      />
      <input
        type="text"
        placeholder="아이 이름"
        onChange={(event) => handleInputKidName(event.target.value)}
      />
      <input
        type="text"
        placeholder="생년월일"
        onChange={(event) => handleInputBirth(event.target.value)}
      />
      <button onClick={handleInputClick}>요청 보내기</button>
    </div>
  );
};

export default InputKids;
