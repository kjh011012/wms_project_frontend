// src/mock/mockCustomerDashboard.js

export const mockDashboardData = {
  items: [
    {
      id: 1,
      product_name: "제품 A",
      product_number: "A001",
      category: "전자",
      warehouse_location: "A-1",
      total_cost: 15000,
      warehouse_type: "냉장",
      inbound_status: "입고 완료",
      inbound_date: "2024-04-01",
      outbound_date: "2024-06-01",
      storage_duration: 60,
      outbound_status: "출고 요청",
      contract_date: "2024-03-15"
    },
    // 🔁 더 추가 가능
  ],
  stats: {
    total_items: 1,
    total_cost: 15000,
    status_counts: {
      inbound_complete: 1,
      inbound_ready: 0,
      outbound_request: 1,
      outbound_complete: 0,
      contract_waiting: 0,
      contract_complete: 1
    }
  }
};

export const mockNotices = [
  { id: 1, title: "시스템 점검 안내", content: "이번 주말 점검 예정", author: "관리자", date: "2024-06-01" },
  { id: 2, title: "신규 기능 추가", content: "계약 기능 업데이트", author: "관리자", date: "2024-05-25" }
];

export const mockInquiries = [
  { id: 1, title: "요금 문의", content: "예상비용 계산이 안 돼요", author_email: "test@test.com", date: "2024-06-01" },
  { id: 2, title: "창고 위치 확인", content: "내 물건 위치 알려주세요", author_email: "test@test.com", date: "2024-05-30" }
];
