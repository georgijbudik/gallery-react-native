import { PayloadAction, SerializedError, createSlice } from "@reduxjs/toolkit";
import { fetchPhotos } from "./photoOperations";
import { IPhoto } from "../../pages/Gallery";

interface InitialState {
  photos: IPhoto[];
  isLoading: boolean;
  error: string;
}

const initialState: InitialState = {
  photos: [],
  isLoading: false,
  error: null,
};

const photoSlice = createSlice({
  name: "photos",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.photos = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(
      fetchPhotos.rejected,
      (state, action: PayloadAction<SerializedError>) => {
        state.isLoading = false;
        state.error = action.payload.message;
      }
    );
  },
});

export const photoReducer = photoSlice.reducer;
