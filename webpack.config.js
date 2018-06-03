module.exports = {
  entry: ['./src/app.ts', 
          './src/arrows.ts',
          './src/function-params.ts',
          './src/object-literal.ts',
          './src/rest-params.ts',
          './src/array-spread.ts',
          './src/numbers.ts',
          './src/strings.ts',
          './src/booleans.ts',
          './src/any.ts',
          './src/imp-exp-types.ts',
          './src/void.ts',
          './src/never.ts',
          './src/literal.ts',
          './src/array.ts',
          './src/object.ts',
          './src/nullandmore.ts',
          './src/function-default.ts',
          './src/function-arg.ts',
          './src/function-types.ts',
          './src/destruct-arrays.ts'],
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