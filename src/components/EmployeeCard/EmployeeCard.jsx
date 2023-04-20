import React from "react";
import "./EmployeeCard.scss";
import Counter from "../Counter/Counter";

const EmployeeCard = (props) => {
  const { name, role } = props;
  return (
    <div className="employee-card">
      <h2>{name}</h2>
      <h2>{role}</h2>
      <Counter />
    </div>
  );
};

export default EmployeeCard;

// const AlbumTiles = (props) => {
//   const { title, albumsArr } = props;

//   const cardListJSX = albumsArr.map((album, index) => (
//     <img
//       className="album-tiles__img"
//       key={title + (index + 1)}
//       src={album.strAlbumThumb}
//       alt={album.strAlbum}
//     />
//   ));
//   return (
//     <>
//       <h3>{title}</h3>
//       <div className="album-tiles">{cardListJSX}</div>
//     </>
//   );
// };

// export default AlbumTiles;
