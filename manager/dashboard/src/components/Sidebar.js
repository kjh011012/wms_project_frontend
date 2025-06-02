import React from "react";
import { Link } from "react-router-dom"; // ✅ 내부 링크 사용을 위한 Link
import "./Sidebar.css";
import logo from "./logo.svg";
import icon1 from "./icon1.svg";
import icon2 from "./icon2.svg";
import icon3 from "./icon3.svg";
import icon4 from "./icon4.svg";

// HashRouter 내부 경로 기반 메뉴
const menuItems = [
  {
    label: "HOME",
    children: [
      { label: "메인페이지", icon: icon1, path: "/admin/Mainpage" },
    ],
  },
  {
    label: "입고 및 계약",
    children: [
      { label: "계약 현황", icon: icon1, path: "/admin/contract-status" },
      { label: "입고 현황", icon: icon1, path: "/admin/inbound-status-detail" },
    ],
  },
  {
    label: "출고",
    children: [
      { label: "출고 현황", icon: icon2, path: "/admin/OutboundStatus" },
    ],
  },
  {
    label: "재고",
    children: [
      { label: "재고 현황", icon: icon2, path: "/admin/InventoryStatus" },
    ],
  },
  {
    label: "창고관리",
    children: [
      { label: "기자재 관리", icon: icon2, path: "/admin/EquipmentList" },
    ],
  },
  {
    label: "시스템",
    children: [
      { label: "공지사항", icon: icon3, path: "/admin/Notices" },
      { label: "문의사항", icon: icon4, path: "/admin/Inquiries" },
      { label: "사원관리", icon: icon4, path: "/admin/Employees" },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="Logo" className="sidebar-logo" />
        Smart WMS
      </div>

      {menuItems.map((menu, index) => (
        <div key={index} className="menu-group">
          <div className="menu-label">{menu.label}</div>
          <div className="menu-children">
            {menu.children.map((child, childIndex) => (
              <Link
                key={childIndex}
                to={child.path}
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
