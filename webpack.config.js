module.exports = {
    module: {
      rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
              loaders: {
                scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
              }
            }
          }
      ]
    }
  }
