import React, { useState, useEffect, useRef } from "react";
//import inquiryServer from "../utils/inquiriesServer"; // inquiryServer.js 임포트
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "../components/Inquiries.css";
import CommentsPage from "./CommentsPage"; // 댓글 페이지 import
import mockCustomerInquiries from "./mock/mockCustomerInquiries";

function CustomerInquiries() {
  const [rowData, setRowData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [formMode, setFormMode] = useState(null); // 'view' | 'edit' | 'create'
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [showCommentPage, setShowCommentPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const gridRef = useRef(null);

  const columnDefs = [
    { headerName: "ID", field: "id", width: 80 },
    { headerName: "제목", field: "title", flex: 1 },
    { headerName: "작성일", field: "date", width: 150 },
  ];

  // 컴포넌트 로드 시 문의사항 가져오기
  useEffect(() => {
    fetchInquiries();
  }, [searchText]);

  // 문의사항 조회
  const fetchInquiries = () => {
  setIsLoading(true);
  try {
    let filtered = [...mockCustomerInquiries];
    if (searchText.trim()) {
      const keyword = searchText.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(keyword) ||
          item.content.toLowerCase().includes(keyword) ||
          item.author_email.toLowerCase().includes(keyword)
      );
    }
    setRowData(filtered);
  } catch (err) {
    alert("문의사항 조회 중 오류가 발생했습니다.");
  } finally {
    setIsLoading(false);
  }
};


  // 입력값 변경 핸들러
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 패널 열기
  const openCreatePanel = () => {
    setFormData({ title: "", content: "" });
    setSelectedInquiry(null);
    setFormMode("create");
  };

  // 패널 보기
  const openViewPanel = (data) => {
    setSelectedInquiry(data);
    setFormData(data);
    setFormMode("view");
  };

  // 패널 수정
  const openEditPanel = () => {
    setFormMode("edit");
  };

  // 패널 닫기
  const closePanel = () => {
    setFormMode(null);
    setSelectedInquiry(null);
    setFormData({ title: "", content: "" });
    setShowCommentPage(false);
  };

  

  // 문의사항 등록 및 수정
  const handleSave = () => {
  if (!formData.title.trim() || !formData.content.trim()) {
    alert("제목과 내용을 입력해주세요.");
    return;
  }

  setIsLoading(true);

  try {
    const payload = {
      ...formData,
      author_email: "user@example.com", // 임시 이메일
      date: new Date().toISOString().slice(0, 10),
    };

    if (formMode === "create") {
      const newId = mockCustomerInquiries.length
        ? Math.max(...mockCustomerInquiries.map((i) => i.id)) + 1
        : 1;

      mockCustomerInquiries.push({ ...payload, id: newId });
      alert("등록되었습니다.");
    } else if (formMode === "edit") {
      const index = mockCustomerInquiries.findIndex((i) => i.id === selectedInquiry.id);
      if (index !== -1) {
        mockCustomerInquiries[index] = {
          ...mockCustomerInquiries[index],
          ...payload,
        };
        alert("수정되었습니다.");
      }
    }

    fetchInquiries();
    closePanel();
  } catch (err) {
    alert("저장 중 오류가 발생했습니다.");
  } finally {
    setIsLoading(false);
  }
};

// 문의사항 삭제
const handleDelete = () => {
  if (!window.confirm("삭제하시겠습니까?")) return;

  setIsLoading(true);

  try {
    const index = mockCustomerInquiries.findIndex((i) => i.id === selectedInquiry.id);
    if (index !== -1) {
      mockCustomerInquiries.splice(index, 1);
      alert("삭제되었습니다.");
    }

    fetchInquiries();
    closePanel();
  } catch (err) {
    alert("삭제 중 오류가 발생했습니다.");
  } finally {
    setIsLoading(false);
  }
};



  const onRowClicked = (event) => openViewPanel(event.data);

  if (showCommentPage && selectedInquiry) {
    return <CommentsPage inquiryId={selectedInquiry.id} onBack={closePanel} />;
  }

  return (
    <div className="inquiries-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="검색어 입력"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={fetchInquiries} disabled={isLoading}>
          검색
        </button>
        <button onClick={openCreatePanel} style={{ float: "right" }}>
          문의 작성
        </button>
      </div>

      <div className="ag-theme-alpine grid-container">
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          rowSelection="single"
          domLayout="autoHeight"
          onRowClicked={onRowClicked}
        />
      </div>

      {formMode && (
        <div className="overlay" onClick={closePanel}>
          <div className="details-panel" onClick={(e) => e.stopPropagation()}>
            <h3>{formMode === "create" ? "문의 등록" : "문의 상세"}</h3>
            <label>제목</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              disabled={formMode === "view"}
            />
            <label>내용</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              disabled={formMode === "view"}
            ></textarea>

            {formMode === "view" && (
              <>
                <button onClick={openEditPanel}>수정</button>
                <button onClick={handleDelete}>삭제</button>
                <button onClick={() => setShowCommentPage(true)}>댓글 보기</button>
              </>
            )}
            {(formMode === "create" || formMode === "edit") && (
              <button onClick={handleSave} disabled={isLoading}>
                {formMode === "create" ? "등록" : "저장"}
              </button>
            )}
            <button onClick={closePanel}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );

}

export default CustomerInquiries;
