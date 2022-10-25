export const getTotalPrice = (list = []) => {
  return list.reduce((prev, item) => {
    return item + parseInt(prev);
  }, 0);
};
