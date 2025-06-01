// 📦 계약 모의 데이터
const MOCK_CONTRACTS = [
  {
    id: 1,
    company_name: '삼성전자',
    product_name: '냉장고',
    contract_date: null,
    warehouse_location: '서울1창고',
    warehouse_type: '냉장',
    inbound_quantity: 100,
    title: '삼성전자 계약서',
    content: '냉장고 100대 보관 계약',
    terms: '3개월',
    signature: '홍길동'
  },
  {
    id: 2,
    company_name: 'LG전자',
    product_name: '세탁기',
    contract_date: '2024-12-01',
    warehouse_location: '부산2창고',
    warehouse_type: '상온',
    inbound_quantity: 80,
    title: 'LG 계약서',
    content: '세탁기 입고 계약',
    terms: '1개월',
    signature: '이순신'
  },
  {
    id: 3,
    company_name: '현대차',
    product_name: '자동차 부품',
    contract_date: null,
    warehouse_location: '대구창고',
    warehouse_type: '특수',
    inbound_quantity: 50,
    title: '현대차 계약서',
    content: '부품 보관',
    terms: '6개월',
    signature: '유재석'
  }
];

export default MOCK_CONTRACTS;
