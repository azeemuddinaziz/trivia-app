const randomSortArray = (array) => {
  array.sort(function () {
    return 0.5 - Math.random();
  });

  return array;
};

export default randomSortArray;
