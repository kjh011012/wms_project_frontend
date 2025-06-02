import React from "react";
import "./Sidebar.css";
import logo from "./logo.svg";
import icon1 from "./icon1.svg";
import icon2 from "./icon2.svg";
import icon3 from "./icon3.svg";
import icon4 from "./icon4.svg";

// 📌 GitHub Pages용 외부 URL 구조 (HashRouter 사용)
const menuItems = [
  {
    label: "HOME",
    children: [
      {
        label: "메인페이지",
        icon: icon1,
        url: "https://kjh011012.github.io/wms_project_frontend/manager/dashboard/#/admin/Mainpage",
      },
    ],
  },
  {
    label: "입고 및 계약",
    children: [
      {
        label: "계약 현황",
        icon: icon1,
        url: "https://kjh011012.github.io/wms_project_frontend/manager/inbound/#/admin/contract-status",
      },
      {
        label: "입고 현황",
        icon: icon1,
        url: "https://kjh011012.github.io/wms_project_frontend/manager/inbound/#/admin/inbound-status-detail",
      },
    ],
  },
  {
    label: "출고",
    children: [
      {
        label: "출고 현황",
        icon: icon2,
        url: "https://kjh011012.github.io/wms_project_frontend/manager/outbound/#/admin/OutboundStatus",
      },
    ],
  },
  {
    label: "재고",
    children: [
      {
        label: "재고 현황",
        icon: icon2,
        url: "https://kjh011012.github.io/wms_project_frontend/manager/inventory/#/admin/InventoryStatus",
      },
    ],
  },
  {
    label: "창고관리",
    children: [
      {
        label: "기자재 관리",
        icon: icon2,
        url: "https://kjh011012.github.io/wms_project_frontend/manager/dashboard/#/admin/EquipmentList",
      },
    ],
  },
  {
    label: "시스템",
    children: [
      {
        label: "공지사항",
        icon: icon3,
        url: "https://kjh011012.github.io/wms_project_frontend/manager/dashboard/#/admin/Notices",
      },
      {
        label: "문의사항",
        icon: icon4,
        url: "https://kjh011012.github.io/wms_project_frontend/manager/dashboard/#/admin/Inquiries",
      },
      {
        label: "사원관리",
        icon: icon4,
        url: "https://kjh011012.github.io/wms_project_frontend/manager/dashboard/#/admin/Employees",
      },
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
              <a
                key={childIndex}
                href={child.url}
                className="sidebar-item"
                target="_self" // ✅ 현재 탭에서 열기
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
