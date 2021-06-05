import React,{useState} from 'react'

import { BlogCardContainer } from "./styled";

import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";

import BlogImg from "../../assests/images/blogImg.jpg"

function BlogCard() {

    const [show, setshow] = useState(false)

    function handelOpenShow(){
        setshow(true)

    }
    function handelcloseShow(){
        setshow(false)
    }

    return (
      <BlogCardContainer style={{ backgroundImage: `url(${BlogImg})` }} onMouseEnter={handelOpenShow} onMouseLeave={handelcloseShow} show={show}>
        <p className="blogDate">10 aug 2020</p>
        <div>
          <h1>Blog Title</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
            dignissimos mollitia dicta libero quae iste nobis ab qui ut
            consequatur nam, adipisci, tempora facilis at. Nesciunt totam alias
            hic nostrum.
          </p>
          {/* <p className="read-more" >
            <span >Reade more </span>
            <ArrowForwardOutlinedIcon />
          </p> */}
        </div>
      </BlogCardContainer>
    );
}

export default BlogCard
