import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

// 아이콘
import logo from "./logo.svg";
import icon1 from "./icon1.svg";
import icon2 from "./icon2.svg";
import icon3 from "./icon3.svg";
import icon4 from "./icon4.svg";

// 메뉴 데이터 (내부 라우트 기반으로 URL 수정)
const menuItems = [
  {
    label: "HOME",
    children: [
      { label: "메인페이지", icon: icon1, route: "/user/CustomerMainPage" },
    ],
  },
  {
    label: "입고 및 계약",
    children: [
      { label: "견적서 작성", icon: icon1, route: "/user/CustomerEstimate" },
      { label: "계약 현황", icon: icon1, route: "/user/CustomerContract" },
      { label: "입고 현황", icon: icon1, route: "/user/CustomerInbound" },
    ],
  },
  {
    label: "출고",
    children: [
      { label: "출고 요청", icon: icon2, route: "/user/CustomerOutboundRequest" },
      { label: "출고 현황", icon: icon2, route: "/user/CustomerOutbound" },
    ],
  },
  {
    label: "시스템",
    children: [
      { label: "공지사항", icon: icon3, route: "/user/Notices" },
      { label: "문의사항", icon: icon4, route: "/user/Inquiries" },
      { label: "나의정보", icon: icon4, route: "/user/Employees" },
    ],
  },
];

// Sidebar 컴포넌트
const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      {/* 상단 제목 */}
      <div className="sidebar-header">
        <img src={logo} alt="Logo" className="sidebar-logo" />
        Smart WMS
      </div>

      {/* 메뉴 렌더링 */}
      {menuItems.map((menu, index) => (
        <div key={index} className="menu-group">
          <div className="menu-label">{menu.label}</div>
          <div className="menu-children">
            {menu.children.map((child, childIndex) => (
              <button
                key={childIndex}
                className="sidebar-item"
                onClick={() => navigate(child.route)}
              >
                {child.icon && (
                  <img
                    className="sidebar-icon"
                    src={child.icon}
                    alt={child.label}
                  />
                )}
                <span>{child.label}</span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
