const DATA = {
  a: {
    b: {
      c: 1,
    },
  },
};

(() => {
  const {
    a: {
      b: { c },
    },
  } = DATA;
  console.log(c + 1);
})();
