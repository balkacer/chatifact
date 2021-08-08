module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            components: "./src/components",
            data: "./src/data",
            theme: "./src/theme",
            styles: "./src/styles",
          },
        },
      ],
    ]
  };
};
