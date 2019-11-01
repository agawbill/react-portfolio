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
    const selectedImageIndex = props.images.findIndex(
      image => image.id === selectedImage.image.id
    );
    const max = {
      image: props.images[props.images.length - 1],
      index: props.images.length - 1
    };
    if (
      selectedImageIndex > 0 &&
      selectedImageIndex <= props.images.length - 1
    ) {
      const imageIdentifier = {
        image: props.images[selectedImage.imageIndex + 1],
        imageIndex: selectedImage.imageIndex + 1
      };
      setSelectedImage(imageIdentifier);
    } else if (selectedImageIndex === 0) {
      setSelectedImage(max);
    }
  };

  const nextHandler = () => {
    const selectedImageIndex = props.images.findIndex(
      image => image.id === selectedImage.image.id
    );
    console.log(selectedImageIndex);

    const min = { image: props.images[0], index: 0 };
    if (
      selectedImageIndex >= 0 &&
      selectedImageIndex < props.images.length - 1
    ) {
      const imageIdentifier = {
        image: props.images[selectedImage.imageIndex - 1],
        imageIndex: selectedImage.imageIndex + 1
      };
      console.log(imageIdentifier);
      console.log(min);

      setSelectedImage(imageIdentifier);
    } else if (selectedImageIndex === props.images.length - 1) {
      setSelectedImage(min);
    }
  };

  const viewerHandler = () => {
    setOpenViewer(!setOpenViewer);
  };

  let imageViewer = null;

  if (openViewer) {
    console.log(selectedImage.image.url);
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
    console.log(imageIdentifier);

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
