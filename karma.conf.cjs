// Karma + Jasmine + Webpack (Babel) + cobertura con Istanbul
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'webpack'],
    plugins: [
      'karma-jasmine',
      'karma-webpack',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-coverage',
    ],
    files: [{ pattern: 'src/**/*.spec.jsx', watched: false }],
    preprocessors: { 'src/**/*.spec.jsx': ['webpack'] },
    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      resolve: { extensions: ['.js', '.jsx'] },
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  ['@babel/preset-react', { runtime: 'automatic' }],
                ],
                // Instrumenta el código para el informe de cobertura
                plugins: [
                  ['istanbul', { exclude: ['**/*.spec.jsx', 'src/testUtils.js'] }],
                ],
              },
            },
          },
          { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        ],
      },
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcovonly', subdir: '.' },
        { type: 'text-summary' },
      ],
      check: {
        global: { statements: 80, branches: 70, functions: 80, lines: 80 },
      },
    },
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu'],
      },
    },
    browsers: ['ChromeHeadlessCI'],
    singleRun: true,
    restartOnFileChange: true,
  });
};
