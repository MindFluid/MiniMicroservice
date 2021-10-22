/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default ({ comments }) => {
    const renderedComments = comments.map(comment => {
        return <li>{comment.content}</li>
    });

    return renderedComments;
};