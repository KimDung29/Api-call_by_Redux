import {
  createSlice,
  createAsyncThunk,
  SerializedError,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";

export interface Photos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface PhotosState {
  photos: Photos[];
  isLoading: boolean;
  error: SerializedError | null;
}

const initialState: PhotosState = {
  photos: [],
  isLoading: false,
  error: null,
};

export const fetchPhotosAsync = createAsyncThunk(
  "photos/fetchPhotos",
  async () => {
    const response = await axios.get<Photos[]>(
      "https://jsonplaceholder.typicode.com/photos"
    );
    return response.data;
  }
);

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    searchPhotos: (state, action: PayloadAction<{ query: number }>) => {
      const filteredPhotos = state.photos.filter(
        (photo: Photos) => photo.albumId === action.payload.query
      );
      state.photos = filteredPhotos;
    },
    addNewAlbum: (state, action: PayloadAction<{ inputValue: string }>) => {
      const newAlbum = {} as Photos;
      newAlbum.id = state.photos.length + 1;

      newAlbum.title = action.payload.inputValue;

      const updatedPhotos = [...state.photos, newAlbum];

      return {
        ...state,
        photos: updatedPhotos,
      };
    },
    removeAlbum: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.photos.findIndex(
        (photo: Photos) => photo.id === action.payload.id
      );

      if (index !== -1) {
        state.photos.splice(index, 1);
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotosAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPhotosAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.photos = action.payload;
      })
      .addCase(fetchPhotosAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});
export const { searchPhotos, addNewAlbum, removeAlbum } = photosSlice.actions;

export default photosSlice.reducer;
