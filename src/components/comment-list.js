import React from 'react';
import CommentBox from './comment-box';
// Убедитесь, что pageId определен

import './stylecom.css';
class CommentList extends React.Component {
  render() {
    const pageId = window.location.pathname.split('/')[2]
    return (
      <div className="comments-list">
        {/* Передаем pageId в CommentBox */}
        <CommentBox pageId = {pageId} />
      </div>
    )
  }
}

export default CommentList;


