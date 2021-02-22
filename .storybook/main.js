module.exports = {
  stories: ["../slices/**/*.stories.[tj]s"],
  addons: [
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
};
