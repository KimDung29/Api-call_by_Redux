import "./photos.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducer";
import { useState } from "react";
import { searchPhotos } from "../../redux/photosSlice";
import Navbar from "../navbar/Navbar";

const Photos = () => {
  const photosList = useSelector((state: RootState) => state.photos.photos);

  const [index, setIndex] = useState(12);
  const showPhoto = photosList.slice(0, index);

  const dispatch = useDispatch();
  const [query, setQuery] = useState<number>(0);

  const handleSearchPhotos = (e: any) => {
    e.preventDefault();
    dispatch(searchPhotos({ query }));
  };
  return (
    <>
      <div>
        <Navbar />
        <div>
          <h2>Photos</h2>
        </div>
        <div className="search_showColor">
          <div className="searchField">
            <div className="selection">
              <select name="album">
                <option value="albumId">Album Id</option>
              </select>
            </div>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search by album id"
                onChange={(e) => setQuery(Number(e.target.value))}
              />
            </div>
            <div className="searchBtn">
              <button onClick={handleSearchPhotos}>Search</button>
            </div>
          </div>
          <div className="randomColor">
            {showPhoto.length > 0 ? (
              showPhoto.map((p: any) => (
                <div className="wrapperColor" key={p.id}>
                  <div
                    className="bgColor"
                    style={{
                      background: `${p.thumbnailUrl
                        .slice(-6, p.thumbnailUrl.length)
                        .padStart(7, "#")}`,
                    }}
                  ></div>
                  <div className="contentColor">
                    <p className="fw-color-content">
                      {p.title.substring(0, 10)}
                    </p>
                    <p>Id: #{p.id} </p>
                    <p>Album Id: #{p.albumId}</p>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ fontSize: "20px" }}>No Album</p>
            )}
          </div>

          <button
            onClick={() => setIndex(index + 12)}
            type="button"
            className="showMore"
          >
            Show More
          </button>
        </div>
      </div>
    </>
  );
};
export default Photos;
