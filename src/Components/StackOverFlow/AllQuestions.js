import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./css/AllQuestions.css";
function AllQuestions() {
  return (
    <div className="all-questions">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>Votes</span>
            </div>
            <div className="all-option">
              <p>0</p>
              <span>Answers</span>
            </div>
            <div className="all-option">
              <p>0</p>
              <small>0 Views</small>
            </div>
          </div>
        </div>
        <div className="question-answer">
          <Link to="/question">How to use drag and drop in ant design?</Link>
          <div
            style={{
              width: "90%",
            }}
          >
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <span className="question-tags">react</span>
            <span className="question-tags">antd</span>
            <span className="question-tags">frontend</span>
          </div>
          <div className="author">
            <small>Timestamp</small>
            <div className="author-details">
              <Avatar />
              <p>User name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllQuestions;
