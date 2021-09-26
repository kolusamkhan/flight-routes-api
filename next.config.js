const path = require('path');
const withPWA = require('next-pwa');
module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    //scope: '/app',
  },
  reactStrictMode: true,
  excludeFile: (str) => /\*.{spec,test}.js/.test(str),
  env: {
    API_ROUTES_ENDPOINT: 'api/routes/flight-routes',
    APP_PROTOCOLO: 'http',
    APP_HOST: 'localhost',
    APP_PORT: '8000',
    RTL_LANGUAGE_CODES: 'ar,ku,ur,fa,he',
    APP_MODE: 'production',
    SHOW_RECORDS_COUNT: 10,
  },
  i18n: {
    locales: ['en', 'ja', 'ru-RU','ar-AE'],
    defaultLocale: 'en',
  },  
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!isServer) {
      // config.node = {
      //   fs: 'empty'
      // }
      config.resolve.fallback = { 
        fs: require.resolve("fs") 
      }
    }
    // Important: return the modified config
    //config.resolve.alias.utils = path.join(__dirname, "utils");
    // Fixes npm packages that depend on `fs` module
    /*config.resolve.fallback = { 
       "fs": false,
      /*"path": false,
      "http": false,
      "https": false,
      "stream": false,
      "zlib": false*/
     //};
    //config.resolve.alias. = path.join(__dirname, "utils");
    //config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
    /*config.node = {
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
  }*/
    //config.plugins.push(new webpack.IgnorePlugin(/.*\/test.*/));
    /*config.module.rules.push(
      {
        test: /\.test.js$/,
        loader: 'ignore-loader'
      }
    );
    */

    return config
  },
});
