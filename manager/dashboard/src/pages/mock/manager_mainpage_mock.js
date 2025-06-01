// 📦 통계 요약 정보
export const mockStatistics = {
  totalContracts: 12,
  totalProducts: 34,
  totalInquiries: 9,
  totalRevenue: "₩15,000,000"
};

// 🧁 파이 차트 데이터 - 상태 분포
export const mockPieChartData = {
  labels: ["입고 완료", "입고 준비", "출고 요청", "출고 완료", "계약 대기", "계약 완료"],
  datasets: [{
    data: [5, 10, 3, 6, 7, 8],
    backgroundColor: ['#FF6384', '#36A2EB', '#4BC0C0', '#FFCE56', '#9966FF', '#FF9F40']
  }]
};

// 📊 바 차트 데이터 - 월별 계약 현황
export const mockBarChartData = {
  labels: ["1월", "2월", "3월", "4월"],
  datasets: [{
    label: "월별 계약 현황",
    data: [3, 5, 2, 7],
    backgroundColor: '#36A2EB'
  }]
};

// 🧾 최근 계약 목록
export const mockRecentContracts = [
  {
    customerName: "김철수",
    productName: "상품 A",
    status: "계약 완료",
    contractDate: "2024-01-05",
    inboundDate: "2024-01-10",
    amount: "₩3,000,000"
  },
  {
    customerName: "이영희",
    productName: "상품 B",
    status: "입고 완료",
    contractDate: "2024-02-15",
    inboundDate: "2024-02-20",
    amount: "₩4,000,000"
  }
];

// 🧱 창고 입출고 상태 요약
export const mockStorageStatus = {
  inboundComplete: 8,
  inboundReady: 5,
  outboundRequest: 4,
  outboundComplete: 7,
  contractWaiting: 3,
  contractComplete: 6
};

// 📢 공지사항
export const mockNotices = [
  {
    id: 1,
    title: "시스템 점검 안내",
    content: "시스템 점검이 6월 2일 예정되어 있습니다.",
    author: "관리자",
    date: "2025-06-01"
  }
];

// 📨 1:1 문의사항
export const mockInquiries = [
  {
    id: 1,
    title: "계약서 관련 문의",
    content: "계약서 수정이 필요한데 어떻게 하나요?",
    author_email: "user@example.com",
    date: "2025-06-01"
  }
];
