// 📁 src/mock/mockEstimateDetailData.js

const MOCK_ESTIMATE_DETAIL = [
  {
    id: 1,
    company_name: '삼성전자',
    product_name: '냉장고',
    warehouse_num: 'A-101',
    inbound_quantity: 100,
    warehouse_type: '냉장',
    warehouse_location: '서울창고',
    pallet_size: '110x110',
    pallet_num: 20,
    barcode_num: 'SAMSUNG20240001',
    barcode: '/barcode-images/1.png'
  },
  {
    id: 2,
    company_name: 'LG전자',
    product_name: '세탁기',
    warehouse_num: 'B-205',
    inbound_quantity: 80,
    warehouse_type: '상온',
    warehouse_location: '부산창고',
    pallet_size: '100x120',
    pallet_num: 15,
    barcode_num: 'LG20240002',
    barcode: '/barcode-images/2.png'
  },
  {
    id: 3,
    company_name: '현대차',
    product_name: '자동차 부품',
    warehouse_num: 'C-310',
    inbound_quantity: 50,
    warehouse_type: '특수',
    warehouse_location: '대구창고',
    pallet_size: '120x120',
    pallet_num: 10,
    barcode_num: 'HYUNDAI20240003',
    barcode: '/barcode-images/3.png'
  }
];

export default MOCK_ESTIMATE_DETAIL;
