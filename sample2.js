const DATA = {
  a: {
    b: {
      c: 1,
    },
  },
};

(() => {
  const c = DATA.a.b.c;
  console.log(c + 1);
})();
