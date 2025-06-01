import React, { useState } from "react";
//import axios from "axios";

import { sendMockSms, verifyMockCode } from "../mock/mockPhoneVerification"; // mock import

const PhoneVerification = ({ phoneNumber, onVerifySuccess }) => {
  const [code, setCode] = useState("");
  const [sent, setSent] = useState(false);
  const [verified, setVerified] = useState(false);

  const sendCode = async () => {
    if (!phoneNumber) {
      alert("전화번호를 먼저 입력해주세요.");
      return;
    }

     try {
      await sendMockSms(phoneNumber); // ✅ mock 사용
      setSent(true);
      alert("인증번호를 전송했습니다. (mock: 123456)");
    } catch (err) {
      alert("인증번호 전송 실패");
    }
  };

  const verifyCode = async () => {
    try {
      const res = await verifyMockCode(phoneNumber, code); // ✅ mock 사용

      if (res === "인증 성공") {
        setVerified(true);
        alert("인증 성공!");
        onVerifySuccess(); // 상위에서 회원가입 버튼 활성화
      } else {
        alert("인증 실패. 다시 시도해주세요.");
      }
    } catch (err) {
      alert("인증 실패");
    }
  };

  return (
    <div className="phone-verification">
      {!verified && (
        <>
          {!sent ? (
            <button onClick={sendCode}>번호 인증</button>
          ) : (
            <div>
              <input
                type="text"
                placeholder="인증번호 입력"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <button onClick={verifyCode}>확인</button>
            </div>
          )}
        </>
      )}
      {verified && <span className="verified-text">인증 완료</span>}
    </div>
  );
};

export default PhoneVerification;