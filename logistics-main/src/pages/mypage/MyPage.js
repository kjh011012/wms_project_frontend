import React, { useEffect, useState } from "react";
import { mockUserInfo } from "../mock/mockMyPage";
import HeaderNav from "../../components/HeaderNav";
import UserInfoForm from "./UserInfoForm";
import PasswordChangeForm from "./PasswordChangeForm";
import "./MyPage.css";

const MyPage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [mode, setMode] = useState("info");
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const fetchUserInfo = () => {
    setUserInfo(mockUserInfo);
    setFormData(mockUserInfo);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    alert("정보가 수정된 것처럼 처리되었습니다.");
    setEditing(false);
    setUserInfo(formData);
  };

  const handlePasswordChange = (e) => {
    setPasswordForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePasswordSubmit = () => {
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert("새 비밀번호가 일치하지 않습니다.");
      return;
    }

    alert("비밀번호가 변경된 것처럼 처리되었습니다.");
    setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
    setMode("info");
  };

  if (!userInfo) return <div>로딩 중...</div>;

  return (
    <>
      <HeaderNav />
      <div className="mypage-container">
        <h2>마이페이지</h2>
        {mode === "info" ? (
          <UserInfoForm
            userInfo={userInfo}
            formData={formData}
            editing={editing}
            onChange={handleChange}
            onEdit={() => setEditing(true)}
            onSubmit={handleSubmit}
            onPasswordMode={() => setMode("password")}
          />
        ) : (
          <PasswordChangeForm
            passwordForm={passwordForm}
            onChange={handlePasswordChange}
            onSubmit={handlePasswordSubmit}
            onCancel={() => setMode("info")}
          />
        )}
      </div>
    </>
  );
};

export default MyPage;
