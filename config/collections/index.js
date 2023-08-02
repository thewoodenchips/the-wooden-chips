/** Returns services as a collection. */
const getAllServices = collection => {
  const projects = collection.getFilteredByGlob('./src/services/*.md');
  return projects.reverse();
};

// const getAllGalleryImages = collection => {
//   const galleryItems = collection.getFilteredByGlob('./src/gallery/*.yaml');
//   return galleryItems;
// };


module.exports = {
  getAllServices
  // getAllGalleryImages
};
