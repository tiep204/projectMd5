
  module.exports = {
    reactScriptsVersion: "react-scripts" /* (default value) */,
    webpack: {
        mode: 'extends',
        configure: {
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        enforce: "pre",
                        use: ["source-map-loader"],
                    },
                ],
            },
            ignoreWarnings: [/Failed to parse source map/],
        },
    },
    plugins: [
      {
        plugin: require('craco-plugin-scoped-css'),
      },
    ],
}