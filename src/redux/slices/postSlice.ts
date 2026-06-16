import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import type { IPost } from "../../models/IPost";
import { service } from "../../services/api.service";

interface IPostSlice {
  posts: IPost[] | null;
  post: IPost | null;
  loading: boolean;
}

const initialState: IPostSlice = { posts: null, post: null, loading: false };

const loadPosts = createAsyncThunk("posts/loadPosts", (_, thunkApi) =>
  service
    .getAll<IPost>("/posts")
    .then((posts) => thunkApi.fulfillWithValue(posts))
    .catch((e) => {
      if (e instanceof Error) {
        return thunkApi.rejectWithValue(e.message);
      }

      return thunkApi.rejectWithValue("error loading posts");
    }),
);

const loadPost = createAsyncThunk("posts/loadPost", (id: number, thunkApi) =>
  service
    .getById<IPost>("/posts", id)
    .then((post) => thunkApi.fulfillWithValue(post))
    .catch((e) => {
      if (e instanceof Error) {
        return thunkApi.rejectWithValue(e.message);
      }

      return thunkApi.rejectWithValue("error loading post");
    }),
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(loadPosts.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(loadPost.fulfilled, (state, action) => {
        state.post = action.payload;
      })
      .addCase(loadPost.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addMatcher(isPending(loadPost, loadPosts), (state) => {
        state.loading = true;
      })
      .addMatcher(isFulfilled(loadPost, loadPosts), (state) => {
        state.loading = false;
      })
      .addMatcher(isRejected(loadPost, loadPosts), (state) => {
        state.loading = false;
      });
  },
});

export default postSlice.reducer;

export const actions = { ...postSlice.actions, loadPosts, loadPost };
