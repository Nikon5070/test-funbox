module.exports = {
  lintOnSave: false,

  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/styles/variables.scss";
        `,
      },
    },
  },
};
