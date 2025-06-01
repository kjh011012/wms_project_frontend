// pages/mock/mock_storageMapData.js

export const mockSlotData = [
  { available: false, company_name: "삼성전자", product_name: "SSD 1TB", slot_name: "SLOT-0-0-0" },
  { available: true, company_name: "", product_name: "", slot_name: "SLOT-1-0-0" },
  { available: false, company_name: "LG전자", product_name: "TV 패널", slot_name: "SLOT-2-0-0" },
  // 총 45개를 미리 만들어도 되고, 필요한 만큼만 작성해도 됩니다
];

export const mockUnassignedItems = [
  { id: 1, company_name: "CJ대한통운", product_name: "포장 박스" },
  { id: 2, company_name: "쿠팡", product_name: "물류 스티커" },
];
