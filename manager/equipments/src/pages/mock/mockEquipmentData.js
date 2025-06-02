// 📁 src/mock/mockEquipmentData.js

const mockEquipmentData = [
  {
    id: 1,
    category: "렌트",
    equipment_name: "전동 드릴",
    equipment_no: "EQ-001",
    type: "공구",
    quantity: 10,
    status: "정상",
    location: "창고 A",
    region: "서울",
    manufacturer: "보쉬",
    model: "XDR-3000",
    purchase_date: "2023-06-15",
    warranty_expiry: "2025-06-15",
    last_maintenance_date: "2024-05-01",
    next_maintenance_date: "2024-11-01",
    assigned_to: "홍길동",
    assigned_to_phone: "01012345678",
    remarks: "정기 점검 필요",
    created_at: "2023-06-15"
  },
  {
    id: 2,
    category: "비품",
    equipment_name: "노트북",
    equipment_no: "EQ-002",
    type: "전자기기",
    quantity: 5,
    status: "수리 중",
    location: "본사",
    region: "경기",
    manufacturer: "LG",
    model: "Gram15",
    purchase_date: "2022-04-10",
    warranty_expiry: "2024-04-10",
    last_maintenance_date: "2024-04-01",
    next_maintenance_date: "2024-10-01",
    assigned_to: "김민수",
    assigned_to_phone: "01098765432",
    remarks: "배터리 교체 필요",
    created_at: "2022-04-10"
  },
  // ... 필요한 만큼 추가
];

export default mockEquipmentData;
