import React, { useState, useEffect } from "react";
//import axios from "axios";
import "./CommentsPage.css"; // 그대로 사용
import mockComments from "./mock/mockComments"; 

//const API_COMMENTS_URL = "http://34.47.73.162:5001/api/comments";

function CommentSection({ inquiryId }) {
  const [comments, setComments] = useState([]);
  const [commentData, setCommentData] = useState({ author: "", content: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = () => {
  setLoading(true);
  setTimeout(() => {
    const filtered = mockComments.filter(c => c.inquiry_id === inquiryId);
    setComments(filtered);
    setLoading(false);
  }, 200); // loading UI를 잠깐 보여주기 위한 딜레이
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

  const now = new Date().toISOString().slice(0, 19).replace("T", " ");
  const payload = {
    ...commentData,
    inquiry_id: inquiryId,
    date: now,
  };

  if (commentData.id) {
    const idx = mockComments.findIndex(c => c.id === commentData.id);
    if (idx !== -1) {
      mockComments[idx] = { ...mockComments[idx], ...payload };
      alert("댓글이 수정되었습니다.");
    }
  } else {
    const newId = mockComments.length > 0 ? Math.max(...mockComments.map(c => c.id)) + 1 : 1;
    mockComments.push({ ...payload, id: newId });
    alert("댓글이 추가되었습니다.");
  }

  fetchComments();
  setCommentData({ author: "", content: "" });
};


  const deleteComment = (commentId) => {
  const index = mockComments.findIndex(c => c.id === commentId);
  if (index !== -1) {
    mockComments.splice(index, 1);
    alert("댓글이 삭제되었습니다.");
    fetchComments();
  }
};


  return (
    <div className="comments-container">
      <h4>댓글</h4>
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
    </div>
  );
}

export default CommentSection;
