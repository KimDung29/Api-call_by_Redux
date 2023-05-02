import { useEffect } from "react";
import { RootState } from "../../redux/reducer";
import { AppDispatch, useAppDispatch, useAppSelector } from "../../redux/store";
import Photos from "../../component/photos/Photos";
import { fetchPhotosAsync } from "../../redux/photosSlice";

const PhotoPage = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector(
    (state: RootState) => state.photos
  );

  useEffect(() => {
    dispatch(fetchPhotosAsync());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <Photos />
    </>
  );
};
export default PhotoPage;
