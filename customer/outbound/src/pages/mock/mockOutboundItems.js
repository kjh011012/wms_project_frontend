// src/mock/mockOutboundItems.js

export const mockOutboundItems = [
  {
    id: 1,
    company_name: "ABC물류",
    product_name: "스마트폰",
    product_number: "A12345",
    inbound_quantity: 500,
    warehouse_location: "서울1창고",
    warehouse_type: "일반",
    warehouse_num: "W01",
    outbound_status: "입고완료",
    contract_date: "2024-03-10",
    outbound_date: "2024-06-05",
    last_outbound_date: "2024-06-01",
    subscription_inbound_date: "2024-03-12",
    total_cost: 320000,
  },
  {
    id: 2,
    company_name: "XYZ테크",
    product_name: "노트북",
    product_number: "B67890",
    inbound_quantity: 200,
    warehouse_location: "부산2창고",
    warehouse_type: "저온",
    warehouse_num: "W12",
    outbound_status: "출고요청",
    contract_date: "2024-04-01",
    outbound_date: "2024-06-03",
    last_outbound_date: "2024-06-02",
    subscription_inbound_date: "2024-04-02",
    total_cost: 800000,
  }
];
