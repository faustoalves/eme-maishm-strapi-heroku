export const parseImage = (image) => {
  return {
    url: image.url,
    alt: image.alt ? image.alt : "Insert Alt",
    width: image.width,
    height: image.height,
  };
};
