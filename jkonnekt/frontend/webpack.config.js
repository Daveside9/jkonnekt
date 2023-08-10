module.exports = {
  // ... other webpack configuration settings

  module: {
    rules: [
      {
        test: /\.js$/, // Match JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use babel-loader to transpile
        },
      },
      // ... other rules
    ],
  },

  // ... other webpack configuration settings
};
