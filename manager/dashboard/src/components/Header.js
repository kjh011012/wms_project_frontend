import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [companyName, setCompanyName] = useState("예제 회사");
  const [userImage, setUserImage] = useState("https://via.placeholder.com/40");
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const email = sessionStorage.getItem("userEmail");

    // 이메일에 따라 고정 이미지 매핑
    const imageMap = {
      "admin@test.com": "/images/admin.png",
      "test@test.com": "/images/user1.png",
      "user@test.com": "/images/user2.png",
    };

    setUserImage(imageMap[email] || "/images/default.png");
  }, []);

  const handleMyInfoClick = () => {
    navigate("/my-info");
  };

  return (
    <header style={styles.header}>
      <div style={styles.searchBarContainer}>
        <input
          type="text"
          placeholder="검색..."
          style={styles.searchBar}
        />
      </div>

      <div style={styles.rightSection}>
        {isLoggedIn && (
          <div style={styles.profileContainer} onClick={handleMyInfoClick}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                color: isHovered ? "black" : "gray",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {companyName}
            </span>
            {userImage && (
              <img
                src={userImage}
                alt="사용자"
                style={styles.userImage}
              />
            )}
          </div>
        )}
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2px 10px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    height: "45px",
  },
  searchBarContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    margin: "0 30px",
  },
  searchBar: {
    width: "40%",
    padding: "5px 12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "13px",
  },
  rightSection: {
    display: "flex",
    justifyContent: "flex-end",
  },
  profileContainer: {
    width: "300px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    cursor: "pointer",
    margin: "0 20px",
    backgroundColor: "#FFFFFF",
    padding: "5px 10px",
    gap: "10px",
  },
  userImage: {
    width: "35px",
    height: "35px",
    borderRadius: "10px",
    objectFit: "cover",
  },
  companyName: {
    marginRight: "30px",
    fontSize: "13px",
    fontWeight: "bold",
    color: "gray",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
};

export default Header;
