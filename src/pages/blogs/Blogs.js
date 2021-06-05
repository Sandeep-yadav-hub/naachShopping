import React,{useEffect} from 'react'

import {BlogsContainer,Blog} from "./styled"
import {Heading} from "../../globalStyled"

import EmptyBlogState from "../../assests/images/emptyBlogState.png";
import BlogCard from "../../components/blogCard/BlogCard"

import {useSelector,useDispatch} from "react-redux"

function Blogs() {

    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);

    const blogs = useSelector(state => state.blogs)


    return (
      <BlogsContainer>
        <Heading>Blogs</Heading>
        <Blog>
          {blogs.length > 0 ? (
            blogs.map((blog) => {
              return (
                <BlogCard />
              );
            })
          ) : (
                // <BlogCard />
            <img src={EmptyBlogState}/>
          )}
        </Blog>
      </BlogsContainer>
    );
}

export default Blogs
