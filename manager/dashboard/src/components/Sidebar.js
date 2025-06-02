import React from "react";
import "./Sidebar.css";
import logo from "./logo.svg";
import icon1 from "./icon1.svg";
import icon2 from "./icon2.svg";
import icon3 from "./icon3.svg";
import icon4 from "./icon4.svg";

// GitHub Pages용 HashRouter URL 형식 메뉴
const menuItems = [
  {
    label: "HOME",
    children: [
      {
        label: "메인페이지",
        icon: icon1,
        url: "https://kjh011012.github.io/wms_project_frontend/manager/dashboard/#/admin/Mainpage",
        external: true,
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
        external: true,
      },
      {
        label: "입고 현황",
        icon: icon1,
        url: "https://kjh011012.github.io/wms_project_frontend/manager/inbound/#/admin/inbound-status-detail",
        external: true,
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
        external: true,
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
        external: true,
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
        external: true,
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
        external: true,
      },
      {
        label: "문의사항",
        icon: icon4,
        url: "https://kjh011012.github.io/wms_project_frontend/manager/dashboard/#/admin/Inquiries",
        external: true,
      },
      {
        label: "사원관리",
        icon: icon4,
        url: "https://kjh011012.github.io/wms_project_frontend/manager/dashboard/#/admin/Employees",
        external: true,
      },
    ],
  },
];

// Sidebar 컴포넌트
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
                target="_self"
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
