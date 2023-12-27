import React from 'react';
import CommentForm from './comment-form';
import CommentItem from './comment-item';

class CommentBox extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        comments : {},
        author: '', 
        comment: ''
    };

    this.deleteComment = this.deleteComment.bind(this);
    this.onAuthorChange = this.onAuthorChange.bind(this);
    this.onCommentChange = this.onCommentChange.bind(this);
    this.addComment = this.addComment.bind(this);
}


componentDidMount() {        
    localStorage.getItem('comments') && this.setState({
        comments: JSON.parse(localStorage.getItem('comments'))
    });
} 

deleteComment(pageId, id) {
    const updateList = this.state.comments[pageId].filter(item => item.id !== id);
    this.setState(prevState => ({
        comments: {
            ...prevState.comments,
            [pageId]: updateList
        }
    }), () => {
        localStorage.setItem('comments', JSON.stringify(this.state.comments));
    });
}

getIdComment() {
    const ms = new Date();
    return ms.getTime();
}

getDateComment() {

    var m = new Date();
    const date = `${m.getDate()}.${m.getMonth()+1}.${m.getFullYear()}`;
    const time = `${m.getHours()}:${m.getMinutes()}:${m.getSeconds()}`;
    const dateTime = `${date} ${time}`;

    return dateTime;
}    

onAuthorChange(event) {
    this.setState({
        author: event.target.value
    });
}

onCommentChange(event){
    this.setState({
        comment: event.target.value
    });
} 

validateInput(str) {
    if(str.match(/<([^>]+?)([^>]*?)>(.*?)<\/\1>/ig)) {
        return false;
    } 
    return true;        
}

addComment(event) {
    event.preventDefault();
    const authorVal = this.state.author.trim();
    const commentVal = this.state.comment.trim();
    const pageId = this.props.pageId;
    
    if(authorVal && commentVal) {
        if(this.validateInput(authorVal) && this.validateInput(commentVal)) {
            const newComment = {
                id: this.getIdComment(),
                author: authorVal,
                comment: commentVal,
                date: this.getDateComment()
            }

            this.setState(prevState => ({
                comments: {
                    ...prevState.comments,
                    [pageId]: prevState.comments[pageId]
                        ? [newComment].concat(prevState.comments[pageId])
                        : [newComment]
                },
                author: '', 
                comment: ''
            }), () => {
                localStorage.setItem('comments', JSON.stringify(this.state.comments));
            });
        } else {
            alert('Поля содержат недопустимые символы');
        }     
    } else {
        alert('Оба поля являются обязательными!');
    }       		
}

render() {
    const { pageId } = this.props;
    const commentsForPage = this.state.comments[pageId] || [];
    let newsTemplate;

    if(commentsForPage.length) {
        newsTemplate = commentsForPage.map((item) => {
            return (
                <CommentItem 
                    key={item.id}
                    id={item.id}
                    pageId={pageId}
                    author={item.author}
                    comment={item.comment}
                    date={item.date} 
                    deleteComment={() => this.deleteComment(pageId, item.id)}
                />
            )
        });
    } else {
        newsTemplate = <p>Комментариев нет</p>
    }
    
    return (
        <div className="comment-box">
            <CommentForm                     
                addComment={this.addComment}
                onAuthorChange={this.onAuthorChange}
                onCommentChange={this.onCommentChange}
                author={this.state.author}
                comment={this.state.comment}
            />
            <hr/> 
            <h3>Комментарии</h3>   
            <ol>             
                {newsTemplate}
            </ol>                          
        </div>
    )            
}
}

export default CommentBox;