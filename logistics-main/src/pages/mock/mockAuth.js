// 📄 mockAuth.js

export const mockUsers = [
  {
    email: "test@test.com",
    password: "test1234!",
    username: "테스트유저",
    role: "user",
  },
  {
    email: "admin@test.com",
    password: "admin1234!",
    username: "관리자유저",
    role: "admin",
  }
];

// 이메일 중복 확인
export const checkEmailExists = (email) => {
  return mockUsers.some(user => user.email === email);
};

// 회원가입 처리 (기본 role: customer)
export const signupUser = (data) => {
  return {
    ...data,
    role: "customer", // 관리자가 직접 생성되지 않도록 기본값
  };
};

// 로그인 처리
export const loginUser = (email, password) => {
  const user = mockUsers.find(user => user.email === email && user.password === password);
  if (user) {
    return { email: user.email, role: user.role };
  }
  throw new Error("Invalid credentials");
};
