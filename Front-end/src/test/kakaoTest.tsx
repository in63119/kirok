import React from "react";

const KakoTest = () => {
  const handleClick = () => {
    console.log("눌렀당");
  };
  return <button onClick={handleClick}>카카오 로그인</button>;
};

export default KakoTest;
