// 최근 견적 데이터 (tableData)
export const mockEstimateTableData = [
  {
    id: 1,
    product_name: "라면 박스",
    category: "식품",
    width_size: 300,
    length_size: 400,
    height_size: 250,
    weight: 20,
    inbound_quantity: 100,
    warehouse_type: "상온",
    subscription_inbound_date: "2024-12-01",
    outbound_date: "2024-12-15"
  },
  {
    id: 2,
    product_name: "화장지",
    category: "생활용품",
    width_size: 500,
    length_size: 500,
    height_size: 300,
    weight: 15,
    inbound_quantity: 50,
    warehouse_type: "냉장",
    subscription_inbound_date: "2024-12-05",
    outbound_date: "2024-12-20"
  }
  // ... 추가 mock 데이터
];

// 견적 계산 결과 mock (optional)
export const mockQuoteResult = {
  inbound_size: "중",
  pallet_count: 2,
  total_weight: 2000,
  storage_duration: 14,
  total_cost: 45000,
};
