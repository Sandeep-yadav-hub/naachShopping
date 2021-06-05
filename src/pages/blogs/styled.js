import styled from "styled-components"

export const BlogsContainer = styled.div`
    &>h1{
        margin-top:20px;
    }
`
export const Blog = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;

  & > img {
    max-width: 90%;
    display: flex;
    align-self: center;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 50px;
  }
`;