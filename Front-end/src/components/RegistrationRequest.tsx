import React, { useState, useEffect } from "react";
// import styled from "styled-components";

// recoil
import { useRecoilValue } from "recoil";
import { institutionState } from "../recoil/institutionState";

// DB
import { firestore } from "../utils/firestore";
import { onSnapshot, query, collection } from "firebase/firestore";

const RegistrationRequest = () => {
  const institution = useRecoilValue(institutionState);
  const [realTimeRequest, setRealTimeRequest] = useState(null);
  const q = query(
    collection(
      firestore,
      "institution",
      `${institution.name}`,
      "RegistrationRequest"
    )
  );

  useEffect(() => {
    onSnapshot(q, (querySnapshot) => {
      const requests = [];

      querySnapshot.forEach((doc) => {
        requests.push(doc.data());
      });
      setRealTimeRequest(requests);
    });
  }, [q]);
  return (
    <div>
      <div>{institution.name} 요청 데이터</div>
      {realTimeRequest?.map((kid: any, i: number) => (
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
