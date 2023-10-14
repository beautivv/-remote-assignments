import React, { useState } from 'react';
import postData from './getPostData.js';
import './App.css';

const Post = () => {
  const [likedArticles, setLikedArticles] = useState([]);

  const handleLikeClick = (postId) => {
    if (likedArticles.includes(postId)) {
      setLikedArticles(likedArticles.filter((id) => id !== postId));
    } else {
      setLikedArticles([...likedArticles, postId]);
    }
  };

  return (
    <div>
      {postData.map((post) => (
        <div key={post.id} className={`article-container ${likedArticles.includes(post.id) ? 'liked' : ''}`}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button className="like-button" onClick={() => handleLikeClick(post.id)}>
            {likedArticles.includes(post.id) ? '已按讚' : '按讚'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Post;
