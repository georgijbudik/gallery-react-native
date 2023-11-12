import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";
import { IPhoto } from "../../screens/Gallery";

const ACCES_KEY = "jNvTjxr7i6a9LffOYoUthOaWfeKNXTZBFgxcfTNrpUI";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common.Authorization = `Client-ID ${ACCES_KEY}`;

export const fetchPhotos = createAsyncThunk<
  IPhoto[],
  void,
  { state: RootState }
>("photos/fetchAll", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`/photos`);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export type FetchPhotosAction = ReturnType<typeof fetchPhotos.fulfilled>;
