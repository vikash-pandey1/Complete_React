import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdEle = useRef();
  const postTitleEle = useRef();
  const postBodyEle = useRef();
  const reactionsEle = useRef();
  const tagsEle = useRef();

  const hangleSubmit = () => {
    event.preventDefault();
    const userId = userIdEle.current.value;
    const postTitle = postTitleEle.current.value;
    const postBody = postBodyEle.current.value;
    const reaction = reactionsEle.current.value;
    const tags = tagsEle.current.value.split(" ");

    userIdEle.current.value = "";
    postTitleEle.current.value = "";
    postBodyEle.current.value = "";
    reactionsEle.current.value = "";
    tagsEle.current.value ="";
    addPost(userId, postTitle, postBody, reaction, tags);
  };

  return (
    <form className="create-post" onSubmit={hangleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your userId here
        </label>
        <input
          placeholder="Your User Id"
          type="text"
          ref={userIdEle}
          rows={4}
          className="form-control"
          id="userId"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          placeholder="how are you feeling today..."
          type="text"
          ref={postTitleEle}
          className="form-control"
          id="title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          placeholder="Tell us more about it"
          type="text"
          ref={postBodyEle}
          rows={4}
          className="form-control"
          id="title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          placeholder="how many people react to this post"
          type="text"
          ref={reactionsEle}
          className="form-control"
          id="reactions"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          placeholder="Please enter tags usign space"
          type="text"
          ref={tagsEle}
          className="form-control"
          id="tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
