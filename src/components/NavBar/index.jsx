import React, { useMemo } from "react";
import { useAppDispatcher, useAppState } from "../../context/appContext";
import { currMonthName, currYear } from "../../libs/dateUtils";
import { getPosts } from "../../services/postService";
import { actionTypes } from "../../store/reducer";
import "./NavBar.css";

function NavBar() {
  const { posts, date, continuationToken } = useAppState();
  const dispatch = useAppDispatcher();

  const filterDuplicates = (newPosts) => {
    return newPosts.filter(
      (newPost) => !posts.find((post) => newPost.id === post.id)
    );
  };

  const getNextPosts = async () => {
    try {
      const resp = await getPosts(continuationToken);
      const { continuationtoken, posts } = resp.responseobjects[0];
      if (!posts) return;
      const newPosts = filterDuplicates(posts);
      newPosts.length && console.log(newPosts);
      dispatch(actionTypes.setPosts(newPosts));
      dispatch(actionTypes.setContinuationToken(continuationtoken));
    } catch (e) {
      console.log("Erron in fetching posts");
    }
  };

  if (posts.length) {
    const lastPost = posts[posts.length - 1];
    const isAfter = date.isAfter(lastPost.calendardatetime, "month");
    if (isAfter) getNextPosts();
  }

  return (
    <div className="nav-container">
      <div className="nav-logo">
        <h2 className="blue">my</h2>
        <h2>hair</h2>
        <h2>diary</h2>
      </div>
      <div className="nav-date">
        <h2 className="bold">{currMonthName(date)}</h2>
        <h2>{currYear(date)}</h2>
      </div>
    </div>
  );
}

export default NavBar;
