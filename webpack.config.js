module.exports = {
  entry: ['./src/app.ts', 
          './src/arrows.ts',
          './src/object-literal.ts',
          './src/rest-params.ts',
          './src/array-spread.ts',
          './src/destruct-arrays.ts',
          './src/function-params.ts'],
  output: {
    filename: 'app.js',
    path: __dirname + './dist'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'awesome-typescript-loader' }
    ]
  },
  devServer: {
    port: 3000
  },
};