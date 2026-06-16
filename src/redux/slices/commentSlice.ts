import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import type { IComment } from "../../models/IComment";
import { service } from "../../services/api.service";

interface ICommentSlice {
  comments: IComment[] | null;
  comment: IComment | null;
  loading: boolean;
}

const initialState: ICommentSlice = {
  comments: null,
  comment: null,
  loading: false,
};

const loadComments = createAsyncThunk("comments/loadComments", (_, thunkApi) =>
  service
    .getAll<IComment>("/comments")
    .then((comments) => thunkApi.fulfillWithValue(comments))
    .catch((e) => {
      if (e instanceof Error) {
        return thunkApi.rejectWithValue(e.message);
      }

      return thunkApi.rejectWithValue("error loading comments");
    }),
);

const loadComment = createAsyncThunk(
  "comments/loadComment",
  (id: number, thunkApi) =>
    service
      .getById<IComment>("/comment", id)
      .then((comment) => thunkApi.fulfillWithValue(comment))
      .catch((e) => {
        if (e instanceof Error) {
          return thunkApi.rejectWithValue(e.message);
        }

        return thunkApi.rejectWithValue("error loading comments");
      }),
);

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(loadComments.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(loadComment.fulfilled, (state, action) => {
        state.comment = action.payload!;
      })
      .addCase(loadComment.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addMatcher(isPending(loadComment, loadComments), (state) => {
        state.loading = true;
      })
      .addMatcher(isFulfilled(loadComment, loadComments), (state) => {
        state.loading = false;
      })
      .addMatcher(isRejected(loadComment, loadComments), (state) => {
        state.loading = false;
      });
  },
});

export default commentSlice.reducer;
export const actions = { ...commentSlice.actions, loadComments, loadComment };
