export function errorBoundary(cb) {
  return (...args) => {
    try {
      return cb(...args);
    } catch (error) {
      console.error(error.message);
    }
  };
}
