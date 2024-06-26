import { createContext, useCallback, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addPosts:()=>{},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }else if(action.type === 'ADD_POSTS'){
    newPostList = action.payload.posts;
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);


  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload:post
    });
  };

  const addPosts = (posts) => {
    dispatchPostList({
      type: "ADD_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  // const arr = [3,5,3,5];
  // cosnt sortedArr = useMemo(()=>arr.sort());

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
        addPosts,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
