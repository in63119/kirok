import React, { useState, useEffect } from "react";
// import styled from "styled-components";

// recoil
import { useRecoilValue } from "recoil";
import { institutionState } from "../recoil/institutionState";

// DB
import { firestore } from "../utils/firestore";
import { onSnapshot, query, collection } from "firebase/firestore";

/*
  이 파일은 Firebase에서 실시간으로 데이터 스냅샷 가져오는 파일
  용도: 기관에 등록요청 데이터가 추가되면 수락용
*/

const RegistrationRequest = () => {
  const institution = useRecoilValue(institutionState);
  const [realTimeRequest, setRealTimeRequest] = useState([]);
  const q = query(
    collection(
      firestore,
      "institution",
      `${institution.name}`,
      "RegistrationRequest"
    )
  );

  useEffect(() => {
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const requests = [];

        querySnapshot.forEach((doc) => {
          // eslint-disable-next-line
          requests.push(doc.data());
        });
        setRealTimeRequest(requests);
      },
      (err) => {
        console.log(err);
      }
    );

    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line
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
