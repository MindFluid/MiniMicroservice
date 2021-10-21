/* eslint-disable import/no-anonymous-default-export */
import React, { useState, Component, useEffect } from 'react';
import axios from 'axios';
import { render } from 'react-dom';

export default ({ postId }) => {
    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        const response = await axios.get(`http://localhost:4001/posts/${ postId }/comments`);

        setComments(response.data);
    };

    useEffect(() => {
        fetchComments();
    }, [])

    const renderedComments = comments.map(comment => {
        return <li>{comment.content}</li>
    });

    return renderedComments;
};