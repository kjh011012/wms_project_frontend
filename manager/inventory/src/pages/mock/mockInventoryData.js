// src/pages/mock/mockInventoryData.js

export const mockDropdownData = {
  distribution_centers: ["서울물류", "부산물류"],
  functionalities: ["입고", "출고"],
  regions: ["A구역", "B구역"],
};

export const mockTableData = [
  {
    id: 1,
    product_name: "상품A",
    product_number: "A-001",
    inbound_quantity: 120,
    warehouse_num: "A-10",
    warehouse_type: "보관중",
  },
  {
    id: 2,
    product_name: "상품B",
    product_number: "B-002",
    inbound_quantity: 85,
    warehouse_num: "B-15",
    warehouse_type: "출고대기",
  },
];

export const mockImageData = {
  product_image: "/images/mock_product.png",
  pallet_image: "/images/mock_pallet.png",
};
