import React from "react";
import "./Sidebar.css";
import logo from "./logo.svg";
import icon1 from "./icon1.svg";
import icon2 from "./icon2.svg";
import icon3 from "./icon3.svg";
import icon4 from "./icon4.svg";

// GitHub Pages용 외부 URL (HashRouter 대응) 수정함
const menuItems = [
  {
    label: "HOME",
    children: [
      {
        label: "메인페이지",
        icon: icon1,
        url: "https://kjh011012.github.io/wms_project_frontend/customer/dashboard/#/user/CustomerMainPage",
      },
    ],
  },
  {
    label: "입고 및 계약",
    children: [
      {
        label: "견적서 작성",
        icon: icon1,
        url: "https://kjh011012.github.io/wms_project_frontend/customer/inbound/#/user/CustomerEstimate",
      },
      {
        label: "계약 현황",
        icon: icon1,
        url: "https://kjh011012.github.io/wms_project_frontend/customer/inbound/#/user/CustomerContract",
      },
      {
        label: "입고 현황",
        icon: icon1,
        url: "https://kjh011012.github.io/wms_project_frontend/customer/inbound/#/user/CustomerInbound",
      },
    ],
  },
  {
    label: "출고",
    children: [
      {
        label: "출고 요청",
        icon: icon2,
        url: "https://kjh011012.github.io/wms_project_frontend/customer/outbound/#/user/CustomerOutboundRequest",
      },
      {
        label: "출고 현황",
        icon: icon2,
        url: "https://kjh011012.github.io/wms_project_frontend/customer/outbound/#/user/CustomerOutbound",
      },
    ],
  },
  {
    label: "시스템",
    children: [
      {
        label: "공지사항",
        icon: icon3,
        url: "https://kjh011012.github.io/wms_project_frontend/customer/inquiry/#/user/CustomerNotices",
      },
      {
        label: "문의사항",
        icon: icon4,
        url: "https://kjh011012.github.io/wms_project_frontend/customer/inquiry/#/user/CustomerInquiries",
      },
      {
        label: "나의정보",
        icon: icon4,
        url: "https://kjh011012.github.io/wms_project_frontend/customer/inquiry/#/user/Myinfo",
      },
    ],
  },
];

// Sidebar 컴포넌트
const Sidebar = () => {
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
              <a
                key={childIndex}
                className="sidebar-item"
                href={child.url}
                target="_self" // "_blank"으로 바꾸면 새 탭
                rel="noopener noreferrer"
              >
                {child.icon && (
                  <img
                    className="sidebar-icon"
                    src={child.icon}
                    alt={child.label}
                  />
                )}
                <span>{child.label}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
