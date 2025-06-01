// 📄 mockPhoneVerification.js

let verificationCode = "123456"; // 고정된 테스트용 코드

export const sendMockSms = (phoneNumber) => {
  console.log(`[MOCK] 인증번호 ${verificationCode} 전송됨 - 대상 번호: ${phoneNumber}`);
  return Promise.resolve("인증번호 전송됨");
};

export const verifyMockCode = (phoneNumber, code) => {
  console.log(`[MOCK] 입력된 코드 확인: ${code}`);
  if (code === verificationCode) {
    return Promise.resolve("인증 성공");
  } else {
    return Promise.resolve("인증 실패");
  }
};
