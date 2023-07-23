/** Returns all blog posts as a collection. */
const getAllServices = collection => {
  const projects = collection.getFilteredByGlob('./src/services/*.md');
  return projects.reverse();
};

module.exports = {
  getAllServices
};
