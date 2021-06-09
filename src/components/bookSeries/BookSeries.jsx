import React from "react";
import "./BookSeries.css";
import MovieRow from "../movieRow/MovieRow";
const BookSeries = () => {
  var items = [
    {
      id: 0,
      image:
        "https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg",
    },
    {
      id: 1,
      image:
        "https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg",
    },
    {
      id: 2,
      image:
        "https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg",
    },
    {
      id: 0,
      image: "https://i.ytimg.com/vi/j1Y5FNKwzNo/maxresdefault.jpg",
    },
    {
      id: 1,
      image: "https://i.ytimg.com/vi/j1Y5FNKwzNo/maxresdefault.jpg",
    },
    {
      id: 2,
      image: "https://i.ytimg.com/vi/j1Y5FNKwzNo/maxresdefault.jpg",
    },
    {
      id: 0,
      image: "https://i.ytimg.com/vi/j1Y5FNKwzNo/maxresdefault.jpg",
    },
    {
      id: 1,
      image: "https://i.ytimg.com/vi/j1Y5FNKwzNo/maxresdefault.jpg",
    },
    {
      id: 2,
      image:
        "https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg",
    },
  ];
  return (
    <div className="bookSeries">
      <h1>Book Séries</h1>
      <div className="rowsGenre">
        <MovieRow title="Comédia" items={items} />
        <MovieRow title="Romance" items={items} />
        <MovieRow title="Ficção" items={items} />
        <MovieRow title="Ação" items={items} />
      </div>
    </div>
  );
};
export default BookSeries;
