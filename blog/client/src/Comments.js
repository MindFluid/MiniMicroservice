/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default ({ comments }) => {
    const renderedComments = comments.map(comment => {
        let content;

        if (comment.status === 'approved') {
            content = comment.content;
        }
        
        if (comment.status === 'pending') {
            content = 'Comment is being reviewed';
        }

        if (comment.status === 'rejected') {
            content = 'Comment has been rejected'
        }

        return <li key={comment.id}>{content}</li>
    });

    return <ul>{renderedComments}</ul>;
};