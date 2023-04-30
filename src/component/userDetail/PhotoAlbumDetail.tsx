import { useSelector } from "react-redux";
import "./userDetail.css";
import { RootState } from "../../redux/reducer";
import {
  Photos,
  addNewAlbum,
  fetchPhotosAsync,
  removeAlbum,
} from "../../redux/photosSlice";
import { useEffect, useState } from "react";
import React from "react";
import { AppDispatch, useAppDispatch } from "../../redux/store";

const PhotoAlbumDetail = () => {
  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPhotosAsync());
  }, [dispatch]);

  const photosList = useSelector((state: RootState) => state.photos.photos);

  const [showAlbum, setShowAlbum] = useState(-10);

  const showPhoto = photosList.slice(showAlbum, photosList.length);

  const onRemoveItem = (id: number) => {
    dispatch(removeAlbum({ id }));
    setShowAlbum(showAlbum + 1);
  };

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleAddNewAlbum = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = inputRef?.current?.value;
    if (inputValue) {
      dispatch(addNewAlbum({ inputValue }));
      inputRef.current.value = ""; // clear the input field
    }
    setShowAlbum(showAlbum - 1);
  };

  return (
    <>
      <div className="containerPhotoAlbum">
        <h2>Photo Albums:</h2>
        <div className="photoAlbum">
          <form onSubmit={handleAddNewAlbum}>
            <input
              ref={inputRef}
              onChange={(e) => {
                e.preventDefault();
              }}
              type="text"
              placeholder="Title of new album"
            />
            <button type="submit" className="button newAlbumBtn">
              New Album
            </button>
          </form>
          <div className="showPhotos">
            {showPhoto.length > 0
              ? showPhoto.map((photo: Photos, i: number) => (
                  <div key={i} className="listNewAlbum">
                    <div className="idList">
                      <span> {i + 1}</span>
                    </div>

                    <div className="listNewAlbum_title">
                      <span>{photo.title} </span>
                    </div>

                    <div
                      className="iconClose"
                      onClick={() => onRemoveItem(photo.id)}
                    >
                      <i className="fas fa-times"></i>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default PhotoAlbumDetail;
