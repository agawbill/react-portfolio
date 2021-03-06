import React, { useState, useCallback } from "react";
import Viewer from "../../../../../components/Viewer/Viewer";
import styles from "./Gallery.module.css";

const Gallery = props => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [openViewer, setOpenViewer] = useState(false);

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
      imageIndex: props.images.length - 1
    };
    if (
      selectedImageIndex > 0 &&
      selectedImageIndex <= props.images.length - 1
    ) {
      const imageIdentifier = {
        image: props.images[selectedImage.imageIndex - 1],
        imageIndex: selectedImage.imageIndex - 1
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
    const min = { image: props.images[0], imageIndex: 0 };
    if (
      selectedImageIndex >= 0 &&
      selectedImageIndex < props.images.length - 1
    ) {
      const imageIdentifier = {
        image: props.images[selectedImage.imageIndex + 1],
        imageIndex: selectedImage.imageIndex + 1
      };
      setSelectedImage(imageIdentifier);
    } else if (selectedImageIndex === props.images.length - 1) {
      setSelectedImage(min);
    }
  };

  const viewerHandler = useCallback(() => {
    setOpenViewer(!setOpenViewer);
  }, []);

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
