import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import type { IUser } from "../../models/IUser";
import { service } from "../../services/api.service";

interface IUserSlice {
  users: IUser[] | null;
  user: IUser | null;
  loading: boolean;
}

const initialState: IUserSlice = { users: null, user: null, loading: false };

const loadUsers = createAsyncThunk("users/loadUsers", (_, thunkApi) =>
  service
    .getAll<IUser>("/users")
    .then((users) => thunkApi.fulfillWithValue(users))
    .catch((e) => {
      if (e instanceof Error) {
        return thunkApi.rejectWithValue(e.message);
      }

      return thunkApi.rejectWithValue("error loading users");
    }),
);

const loadUser = createAsyncThunk("users/loadUser", (id: number, thunkApi) =>
  service
    .getById<IUser>("/users", id)
    .then((user) => thunkApi.fulfillWithValue(user))
    .catch((e) => {
      if (e instanceof Error) {
        return thunkApi.rejectWithValue(e.message);
      }

      return thunkApi.rejectWithValue("error loading user");
    }),
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUsers.fulfilled, (state, action) => {
        state.users = action.payload!;
      })
      .addCase(loadUsers.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.user = action.payload!;
      })
      .addCase(loadUser.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addMatcher(isPending(loadUser, loadUsers), (state) => {
        state.loading = true;
      })
      .addMatcher(isFulfilled(loadUser, loadUsers), (state) => {
        state.loading = false;
      })
      .addMatcher(isRejected(loadUser, loadUsers), (state) => {
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
export const actions = { ...userSlice.actions, loadUsers, loadUser };
