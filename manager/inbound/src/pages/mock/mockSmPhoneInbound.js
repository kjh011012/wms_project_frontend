// 📁 src/mock/mockSmPhoneInbound.js

const MOCK_SM_PHONE_INBOUND = [
  {
    id: 101,
    company_name: "삼성전자",
    product_name: "Z Fold 6",
    inbound_quantity: 50,
    warehouse_location: "서울 스마트창고",
    warehouse_type: "특수",
    inbound_status: "입고 준비",
    contract_date: "2024-11-01",
    inbound_date: null,
    barcode_num: "CONTRACT002",
    barcode: "/barcode-images/101.png"
  },
  {
    id: 102,
    company_name: "LG전자",
    product_name: "Wing 2",
    inbound_quantity: 30,
    warehouse_location: "부산 스마트창고",
    warehouse_type: "상온",
    inbound_status: "입고 완료",
    contract_date: "2024-10-15",
    inbound_date: "2024-11-03",
    barcode_num: "CONTRACT007",
    barcode: "/barcode-images/102.png"
  }
];

export default MOCK_SM_PHONE_INBOUND;
