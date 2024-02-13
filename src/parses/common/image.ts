export const parseImage = (image) => {
  if (image.url) {
    return {
      url: image.url,
      alt: image.alt ? image.alt : "Insert Alt",
      width: image.width,
      height: image.height,
    };
  }
  return {};
};
