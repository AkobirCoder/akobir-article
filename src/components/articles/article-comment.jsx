import React from 'react';

const ArticleComment = ({body, author}) => {
    return (
        <div>{body}{author.username}</div>
    );
}

export default ArticleComment;