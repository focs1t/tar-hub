import React from 'react';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      role: localStorage.getItem('role') // Get role from localStorage
    };
  }

  render() {
    const { id, pageId, author, comment, date, deleteComment } = this.props;
    const { role } = this.state; // Destructure role from state

    return (
      <li className="comment-item">
        <div>
          <span className="comment-author">{author}</span>
          <span className="comment-date">{date}</span>
          {/* Conditionally render the delete button based on the user role */}
          {role === 'Admin' && (
            <button className="delete-comment" onClick={() => deleteComment(id, pageId)}>
              Удалить комментарий
            </button>
          )}
        </div>
        <p className="comment-text">{comment}</p>
      </li>
    );
  }
}

export default CommentItem;
