import { useContext, useEffect, useState} from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import Welcome from "./Welcome";
import LoadingSpinner from "./LoadingSpiner";
const PostList = () => {
  const { postList, addPosts } = useContext(PostListData);

  const [fetching,setFetching] =  useState(false);

  useEffect(()=>{
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts",{signal})
    .then((res) => res.json())
    .then((data) => {
      addPosts(data.posts);
      setFetching(false);
    });

    // cleanup useEffect
    return ()=>{
      controller.abort();
    }
  },[])

 

  return (
    <>
    {fetching && <LoadingSpinner/>}
      { !fetching && postList.length === 0 && <Welcome/>}
      {!fetching && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
