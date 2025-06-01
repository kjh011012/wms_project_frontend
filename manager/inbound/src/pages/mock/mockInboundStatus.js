// 📁 src/mock/mockInboundStatus.js
const MOCK_INBOUND_STATUS = [
  {
    id: 1,
    company_name: "삼성전자",
    product_name: "냉장고",
    inbound_quantity: 100,
    warehouse_location: "서울창고",
    warehouse_type: "냉장",
    weight: "120kg",
    inbound_status: "입고 대기",
    contract_date: null,
    subscription_inbound_date: "2024-12-01",
    pallet_size: "110x110",
    pallet_num: 20,
    barcode_num: "SAMSUNG-001",
    barcode: "/barcode-images/1.png",
    warehouse_num: "A-101"
  },
  {
    id: 2,
    company_name: "LG전자",
    product_name: "세탁기",
    inbound_quantity: 80,
    warehouse_location: "부산창고",
    warehouse_type: "상온",
    weight: "90kg",
    inbound_status: "입고 완료",
    contract_date: "2024-11-15",
    subscription_inbound_date: "2024-11-20",
    pallet_size: "100x120",
    pallet_num: 15,
    barcode_num: "LG-002",
    barcode: "/barcode-images/2.png",
    warehouse_num: "B-202"
  }
];

export default MOCK_INBOUND_STATUS;
