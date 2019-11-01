import React, { useState } from "react";
import Viewer from "../../../../../components/Viewer/Viewer";
import styles from "./Gallery.module.css";

const Gallery = props => {
  let [selectedImage, setSelectedImage] = useState(null);
  let [openViewer, setOpenViewer] = useState(false);

  const selectHandler = image => {
    setSelectedImage(image);
    setOpenViewer(true);
  };

  const prevHandler = () => {
    const min = props.images[0];
    const max = props.images[props.images.length - 1];
    if (selectedImage.id > min.id && selectedImage.id <= max.id) {
      setSelectedImage(props.images[selectedImage.imageIdentifier + 1]);
    } else if (selectedImage.id === min.id) {
      setSelectedImage(max);
    }
  };

  const nextHandler = () => {
    const min = props.images[0];
    const max = props.images[props.images.length - 1];
    if (selectedImage.id >= min.id && selectedImage.id < max.id) {
      setSelectedImage(props.images[selectedImage.imageIdentifier - 1]);
    } else if (selectedImage.id === max.id) {
      setSelectedImage(min);
    }
  };

  const viewerHandler = () => {
    setOpenViewer(!setOpenViewer);
  };

  let imageViewer = null;

  if (openViewer) {
    imageViewer = (
      <Viewer
        image={selectedImage.image.url}
        open={openViewer}
        close={viewerHandler}
        previous={prevHandler}
        next={nextHandler}
      />
    );
  }

  const projectImages = props.images.map((image, index) => {
    const imageIdentifier = { image, imageIndex: index };
    return (
      <img
        src={image.url}
        key={image.id}
        onClick={() => selectHandler(imageIdentifier)}
        alt="project"
      />
    );
  });

  return (
    <>
      {imageViewer}
      <div className={styles.Gallery}>{projectImages}</div>
    </>
  );
};

export default Gallery;
