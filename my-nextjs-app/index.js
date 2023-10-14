const React = require('react');
const { useState } = require('react');
const postData = require('./getpostdata.js');
require('tailwindcss/base.css');
require('tailwindcss/components.css');
require('tailwindcss/utilities.css');

const Home = () => {
  const [likedArticles, setLikedArticles] = useState([]);

  const handleLikeClick = (postId) => {
    if (likedArticles.includes(postId)) {
      setLikedArticles(likedArticles.filter((id) => id !== postId));
    } else {
      setLikedArticles([...likedArticles, postId]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {postData.map((post) => (
        <div key={post.id} className={`article-container p-4 border mb-4 ${likedArticles.includes(post.id) ? 'bg-blue-600' : ''}`}>
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-700 mb-4">{post.content}</p>
          <button className={`like-button px-4 py-2 rounded ${likedArticles.includes(post.id) ? 'bg-green-600' : 'bg-blue-600'}`} onClick={() => handleLikeClick(post.id)}>
            {likedArticles.includes(post.id) ? '已按讚' : '按讚'}
          </button>
        </div>
      ))}
    </div>
  );
};

module.exports = Home;
