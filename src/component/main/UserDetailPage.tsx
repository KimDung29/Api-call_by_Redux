import Navbar from "../navbar/Navbar";
import InfoUser from "../userDetail/InfoUser";
import PhotoAlbumDetail from "../userDetail/PhotoAlbumDetail";

const UserDetailPage = () => {
  return (
    <>
      <div>
        <Navbar />
        <InfoUser />
        <hr />
        <PhotoAlbumDetail />
      </div>
    </>
  );
};
export default UserDetailPage;
