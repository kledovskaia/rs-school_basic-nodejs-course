export function errorBoundary(cb) {
  if (cb.length) {
    return (...args) => {
      try {
        return cb(...args);
      } catch (err) {
        console.error(err.message);
      }
    };
  } else {
    try {
      return cb();
    } catch (err) {
      console.error(err.message);
    }
  }
}
