import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Button = styled.button`
  background-color: ${(props) => (props.liked ? 'green' : 'gray')};
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin: 10px;
`;

const Post = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div>
      <h2>文章標題</h2>
      <p>文章內容...</p>
      <Button liked={liked} onClick={handleLikeClick}>
        {liked ? '取消讚' : '按讚'} ({likeCount})
      </Button>
    </div>
  );
};


export default Post;
