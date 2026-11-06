import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const loginAdmin = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post(
        "/api/auth/login",
        credentials
      );

      return response.data.admin;

    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);

export const checkAdminSession = createAsyncThunk(
  "auth/checkSession",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/auth/me");
      return response.data.admin;

    } catch (error) {
      return rejectWithValue("Not logged in");
    }
  }
);

export const logoutAdmin = createAsyncThunk(
  "auth/logout",
  async () => {
    await api.post("/api/auth/logout");
  }
);

const authSlice = createSlice({
  name: "auth",

  initialState: {
    admin: null,
    isAuthenticated: false,
    loading: false,
    checked: false,
    error: null
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload;
        state.isAuthenticated = true;
        state.checked = true;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(checkAdminSession.fulfilled, (state, action) => {
        state.admin = action.payload;
        state.isAuthenticated = true;
        state.checked = true;
      })
      .addCase(checkAdminSession.rejected, (state) => {
        state.admin = null;
        state.isAuthenticated = false;
        state.checked = true;
      })
      .addCase(logoutAdmin.fulfilled, (state) => {
        state.admin = null;
        state.isAuthenticated = false;
      });
  }
});

export default authSlice.reducer;