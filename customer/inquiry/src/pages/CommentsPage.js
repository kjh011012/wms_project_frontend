import React, { useState, useEffect } from "react";
//import axios from "axios";
import "../components/CommentsPage.css";
import mockCommentData from "./mock/mockCommentData";

//const API_COMMENTS_URL = "http://34.47.73.162:5001/api/comments";

function CommentsPage({ inquiryId, onBack }) {
  const [comments, setComments] = useState([]);
  const [commentData, setCommentData] = useState({ author: "", content: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
   fetchComments();
 }, [inquiryId]);

  const fetchComments = () => {
  setLoading(true);
  try {
    const filtered = mockCommentData.filter((c) => c.inquiry_id === inquiryId);
    setComments(filtered);
  } catch (err) {
    console.error("댓글 불러오기 실패:", err);
  } finally {
    setLoading(false);
  }
};


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCommentData({ ...commentData, [name]: value });
  };

  const saveComment = () => {
  if (!commentData.author || !commentData.content) {
    alert("작성자와 내용을 모두 입력해주세요.");
    return;
  }

  try {
    if (commentData.id) {
      const index = mockCommentData.findIndex((c) => c.id === commentData.id);
      if (index !== -1) {
        mockCommentData[index] = { ...mockCommentData[index], ...commentData };
        alert("댓글이 수정되었습니다.");
      }
    } else {
      const newId = mockCommentData.length
        ? Math.max(...mockCommentData.map((c) => c.id)) + 1
        : 1;

      const newComment = {
        id: newId,
        ...commentData,
        inquiry_id: inquiryId,
        date: new Date().toISOString().slice(0, 10),
      };
      mockCommentData.push(newComment);
      alert("댓글이 추가되었습니다.");
    }

    setCommentData({ author: "", content: "" });
    fetchComments();
  } catch (err) {
    console.error("댓글 저장 실패:", err);
  }
};


  const deleteComment = (commentId) => {
  try {
    const index = mockCommentData.findIndex((c) => c.id === commentId);
    if (index !== -1) {
      mockCommentData.splice(index, 1);
      alert("댓글이 삭제되었습니다.");
    }
    fetchComments();
  } catch (err) {
    console.error("댓글 삭제 실패:", err);
  }
};


  return (
    <div className="comments-container">
      <h3>댓글 관리</h3>
      {loading ? (
        <p>댓글을 불러오는 중입니다...</p>
      ) : (
        <>
          <ul className="comments-list">
            {comments.map((comment) => (
              <li key={comment.id} className="comment-item">
                <p>
                  <strong>{comment.author}:</strong> {comment.content}
                </p>
                <small>{comment.date}</small>
                <div>
                  <button onClick={() => setCommentData(comment)} className="edit-button">
                    수정
                  </button>
                  <button onClick={() => deleteComment(comment.id)} className="delete-button">
                    삭제
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h4>댓글 작성</h4>
          <label>작성자</label>
          <input
            type="text"
            name="author"
            value={commentData.author}
            onChange={handleInputChange}
          />
          <label>내용</label>
          <textarea
            name="content"
            value={commentData.content}
            onChange={handleInputChange}
          ></textarea>
          <button onClick={saveComment} className="save-button" disabled={loading}>
            저장
          </button>
        </>
      )}
      <button onClick={onBack} className="back-button">
        뒤로가기
      </button>
    </div>
  );
}

export default CommentsPage;
