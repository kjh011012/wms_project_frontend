//mock data를 사용하여 계약 현황 페이지를 구현합니다.
import React, { useState, useEffect, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Min_contract_state_detail from './Min_contract_state_detail';
import { useNavigate } from 'react-router-dom';
import MOCK_CONTRACTS from './mock/mockContractData';

function Min_contract_state() {
  const [contracts, setContracts] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [contractForm, setContractForm] = useState({
    title: '',
    content: '',
    terms: '',
    signature: ''
  });
  
  const [selectedRowData, setSelectedRowData] = useState(null);
  const navigate = useNavigate();

  const gridRef = useRef(null);

  //const API_BASE_URL = 'http://34.64.211.3:5001'; // 새로운 IP로 수정

  const [waitingContracts, setWaitingContracts] = useState([]);
  const [approvedContracts, setApprovedContracts] = useState([]);
  const [activeTab, setActiveTab] = useState('waiting');

  const columnDefs = [
    { field: 'id', headerName: '번호', width: 100 },
    { field: 'company_name', headerName: '회사명', width: 150 },
    { field: 'product_name', headerName: '상품명', width: 150 },
    { field: 'contract_date', headerName: '계약일', width: 150, valueFormatter: (params) => params.value || '계약 대기' },
    { field: 'warehouse_location', headerName: '창고위치', width: 150 },
    { field: 'warehouse_type', headerName: '보관창고', width: 150 },
    { field: 'inbound_quantity', headerName: '입고수량', width: 150 }
  ];

  const defaultColDef = {
    resizable: true,
    suppressMovable: true
  };

  // 계약 목록 데이터 패칭
  const fetchData = async () => {
  setLoading(true);
  try {
    const encodedSearch = search.trim().toLowerCase();
    let data = MOCK_CONTRACTS.filter(item => 
      item.company_name.toLowerCase().includes(encodedSearch) || 
      item.product_name.toLowerCase().includes(encodedSearch)
    );

    data = data.map(item => ({
      ...item,
      contract_date: item.contract_date ? item.contract_date : '계약 대기'
    }));

    setContracts(data);
  } catch (error) {
    console.error('Error loading mock contracts:', error);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    // 초기 데이터 로드
    fetchData();

    // 30초마다 데이터 갱신
    const interval = setInterval(() => {
      fetchData();
    }, 30000);

    // 컴포넌트 언마운트 시 인터벌 정리
    return () => clearInterval(interval);
  }, [search]);

  const handleContractUpdate = () => {
    fetchData(); // 데이터 재조회
  };

  // 특정 계약 상세 정보 가져오기
  const fetchContractDetail = async (contractId) => {
  try {
    const data = MOCK_CONTRACTS.find(c => c.id === contractId);
    if (!data) throw new Error('계약을 찾을 수 없습니다.');

    setSelectedRow(data);
    setContractForm({
      title: data.title || '',
      content: data.content || '',
      terms: data.terms || '',
      signature: data.signature || ''
    });
    setSelectedRowData(data);
    setIsModalOpen(true);
  } catch (error) {
    console.error('Error loading contract detail:', error);
  }
};


  const onRowClicked = (event) => {
    console.log("선택된 행:", event.data); // 디버깅용 로그 추가
    setSelectedRow(event.data);
    setIsModalOpen(true); 
  };

  // 계약 취소 버튼 클릭 핸들러
  const handleCancelContract = async () => {
  const selectedNodes = gridRef.current.api.getSelectedNodes();
  if (selectedNodes.length === 0) {
    alert("취소할 계약을 선택하세요.");
    return;
  }

  const selectedData = selectedNodes[0].data;
  const contractId = selectedData.id;

  const target = MOCK_CONTRACTS.find(c => c.id === contractId);
  if (target) {
    target.contract_date = null;  // 상태를 "계약 대기"로 변경
    alert(`계약 ID ${contractId} 취소 처리됨 (Mock)`);
    fetchData();  // 변경된 mock 데이터를 다시 불러오기
  } else {
    alert("계약을 찾을 수 없습니다.");
  }
};

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.sectionTitle}>계약 현황</h2>
        
        {/* 🔍 검색 및 기능 버튼 영역 */}
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.inputField}
          />
          
          <div style={styles.buttonGroup}>
            <button
              onClick={handleCancelContract}
              style={{ ...styles.buttonBase, ...styles.buttonDanger }}
            >
             계약 취소
            </button>
            <button
              onClick={() => navigate('/admin/storage-map')}
              style={{ ...styles.buttonBase, ...styles.buttonPrimary }}
            >
              창고 현황
            </button>
          </div>
        </div>

        {/* 🔼 탭 버튼 영역 */}
        <div style={styles.tabContainer}>
          <button
            style={{
              ...styles.tabButton,
              ...(activeTab === 'waiting' ? styles.tabButtonActive : {}),
            }}
            onClick={() => setActiveTab('waiting')}
          >
            계약 대기
          </button>
          <button
            style={{
              ...styles.tabButton,
              ...(activeTab === 'approved' ? styles.tabButtonActive : {}),
            }}
            onClick={() => setActiveTab('approved')}
          >
            계약 승인
          </button>
        </div>

        {/* 🔽 테이블 영역 */}
        {activeTab === 'waiting' && (
          <div className="ag-theme-alpine" style={styles.tableContainer}>
            <AgGridReact
              ref={gridRef}
              rowData={contracts.filter(c => c.contract_date === '계약 대기')}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              rowSelection='single'
              onRowClicked={onRowClicked}
              pagination={true}
              paginationPageSize={10}
            />
          </div>
        )}

        {activeTab === 'approved' && (
          <div className="ag-theme-alpine" style={styles.tableContainer}>
            <AgGridReact
              ref={gridRef}
              rowData={contracts.filter(c => c.contract_date !== '계약 대기')}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              rowSelection='single'
              onRowClicked={onRowClicked}
              pagination={true}
              paginationPageSize={10}
            />
          </div>
        )}

        {/* Modal 컴포넌트 */}
        {selectedRow && isModalOpen && (
          <Min_contract_state_detail 
            contract={selectedRow}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onContractUpdate={handleContractUpdate}
          />
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  content: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "15px",
    paddingBottom: "10px",
    borderBottom: "2px solid #6f47c5",
  },
  searchContainer: {
    marginBottom: "20px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "10px",
    justifyContent: "space-between",
  },
  inputField: {
    flex: "1 1 250px",
    padding: "10px 15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outline: "none",
    transition: "border 0.2s ease-in-out",
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
  },
  buttonBase: {
    padding: "10px 16px",
    fontSize: "14px",
    fontWeight: "600",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.2s ease-in-out, transform 0.2s ease",
    boxShadow: "0 2px 4px rgba(145, 142, 142, 0.1)",
  },
  buttonDanger: {
    backgroundColor: "#a5aaa3",
    color: "#fff",
  },
  buttonPrimary: {
    backgroundColor: "#6f47c5",
    color: "#fff",
  },
  tableContainer: {
    height: "520px",
    width: "100%",
  },
  agGridHeader: {
    backgroundColor: "#e6e1f7",
    color: "#6f47c5",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "14px",
  },
  agGridRow: {
    fontSize: "12px",
    textAlign: "center",
    borderBottom: "1px solid #ddd",
    '&:hover': {
      backgroundColor: "#f3eefc",
    },
  },
  tabContainer: {
    display: "flex",
    justifyContent: "left",
    marginBottom: "20px",
    gap: "20px",
  },
  tabButton: {
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: "bold",
    border: "none",
    borderBottom: "3px solid transparent",
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  tabButtonActive: {
    borderBottom: "3px solid #6f47c5",
    color: "#6f47c5",
  }
};

export default Min_contract_state;
