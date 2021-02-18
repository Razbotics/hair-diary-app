import produce from "immer";
import moment from "moment";

export const initialState = {
  date: moment(),
  posts: [],
  media: [],
  loading: false,
  continuationToken: null,
};

const ACTIONS = {
  EDIT_DATE: "edit_date",
  SET_POSTS: "set_posts",
  SET_MEDIA: "set_media",
  SET_LOADING: "set_loading",
  SET_TOKEN: "set_token",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.EDIT_DATE:
      return produce(state, (draft) => {
        draft.date = action.payload;
      });

    case ACTIONS.SET_POSTS:
      return produce(state, (draft) => {
        draft.posts = [...draft.posts, ...action.payload];
      });

    case ACTIONS.SET_TOKEN:
      return produce(state, (draft) => {
        draft.continuationToken = action.payload;
      });

    case ACTIONS.SET_LOADING:
      return produce(state, (draft) => {
        draft.loading = action.payload;
      });
  }
};

export const actionTypes = {
  editDate: (date) => ({ type: ACTIONS.EDIT_DATE, payload: date }),
  setPosts: (posts) => ({ type: ACTIONS.SET_POSTS, payload: posts }),
  setContinuationToken: (token) => ({
    type: ACTIONS.SET_TOKEN,
    payload: token,
  }),
  setLoading: (loading) => ({
    type: ACTIONS.SET_LOADING,
    payload: loading,
  }),
};
