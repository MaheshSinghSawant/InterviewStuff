import { useEffect, useState } from "react";
import "./styles.css";

let API = "https://retoolapi.dev/lfaPzW/dogs";

export default function App() {
  const [images, setImages] = useState([]);
  const [showLikedPage, setShowLikedPage] = useState(false);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((result) => {
        let finalImages = result.map((image) => {
          return { ...image, isLiked: false };
        });
        setImages(finalImages);
      });
  }, []);

  let onClick = (id) => {
    let copy = images.map((image) => {
      if (id === image.id) {
        return {
          ...image,
          isLiked: !image.isLiked
        };
      } else {
        return image;
      }
    });
    console.log(copy);
    setImages([...copy]);
  };

  return (
    <div className="App">
      <button>Show Liked</button>
      <div className="grid">
        {images.map((image) => {
          return (
            <div className="cell">
              <button
                className={image.isLiked ? "heart isLiked" : "heart"}
                onClick={() => onClick(image.id)}
              >
                &#9829;
              </button>
              <img key={image.id} src={image.url} alt={image.url} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
