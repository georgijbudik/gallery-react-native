import { RootState } from "./store";
export const selectPhotos = (state: RootState) => state.photos.photos;

export const selectIsLoading = (state: RootState) => state.photos.isLoading;

export const selectError = (state: RootState) => state.photos.error;
