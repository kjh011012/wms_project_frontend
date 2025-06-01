import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

// 아이콘
import logo from "./logo.svg";
import icon1 from "./icon1.svg";
import icon2 from "./icon2.svg";
import icon3 from "./icon3.svg";
import icon4 from "./icon4.svg";

// 메뉴 데이터 (url을 내부 경로만 남기도록 수정)
const menuItems = [
  {
    label: "HOME",
    children: [
      { label: "메인페이지", icon: icon1, url: "/admin/Mainpage" },
    ],
  },
  {
    label: "입고 및 계약",
    children: [
      { label: "계약 현황", icon: icon1, url: "/admin/contract-status" },
      { label: "입고 현황", icon: icon1, url: "/admin/inbound-status-detail" },
    ],
  },
  {
    label: "출고",
    children: [
      { label: "출고 현황", icon: icon2, url: "/admin/OutboundStatus" },
    ],
  },
  {
    label: "재고",
    children: [
      { label: "재고 현황", icon: icon2, url: "/admin/InventoryStatus" },
    ],
  },
  {
    label: "창고관리",
    children: [
      { label: "기자재 관리", icon: icon2, url: "/admin/EquipmentList" },
    ],
  },
  {
    label: "시스템",
    children: [
      { label: "공지사항", icon: icon3, url: "/admin/Notices" },
      { label: "문의사항", icon: icon4, url: "/admin/Inquiries" },
      { label: "사원관리", icon: icon4, url: "/admin/Employees" },
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
          {/* 상위 메뉴 */}
          <div className="menu-label">{menu.label}</div>

          {/* 하위 메뉴 */}
          <div className="menu-children">
            {menu.children.map((child, childIndex) => (
              <Link
                key={childIndex}
                to={child.url}
                className="sidebar-item"
              >
                {child.icon && (
                  <img
                    className="sidebar-icon"
                    src={child.icon}
                    alt={child.label}
                  />
                )}
                <span>{child.label}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
