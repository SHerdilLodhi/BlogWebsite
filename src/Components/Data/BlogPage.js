import { Avatar } from '@mui/material';
import React from 'react';

const BlogPage = () => {
  return (
    <div className="blogpage-main">

    <div className="responsive-container">
      <div className="responsive-div div1 "><Avatar
  alt="Remy Sharp"
  src="./myimg.png"
  sx={{ width: 50, height: 50 }}
/></div>
      <div className="responsive-div div2"><h4>Sherdil Lodhi</h4><h4>12/12/2022</h4></div>
      <div className="responsive-div div3">Div 3</div>
      <div className="responsive-div div4">Div 4</div>

    </div>
      <div className="responsive-div div5">Div 5</div>
  </div>
  );
};

export default BlogPage;

