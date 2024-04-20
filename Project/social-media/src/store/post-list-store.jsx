import { createContext, useReducer } from "react";
 export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer,defaultPostList);

  const addPost = () => {};
  const deletePost = () => {};

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const defaultPostList = [
  {
    id: "1",
    title: "going to mumbai",
    body: "i am in mumbai enjoying a log thank for your support",
    reactions: 200,
    userId: "user-10",
    tags: ["vacation", "enjoying"],
  },
  {
    id: "2",
    title: "going to delhi",
    body: "i am in delhi enjoying a log thank for your support",
    reactions: 1000,
    userId: "user-11",
    tags: ["vacation", "enjoying", "summer"],
  },
];

export default PostListProvider;
