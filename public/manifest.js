const path = require('path');

module.exports = {
  name: 'Template',
  short_name: 'Template',
  theme_color: '#5b0b44',
  background_color: '#5b0b44',
  display: 'standalone',
  orientation: 'portrait',
  start_url: '/',
  crossorigin: 'use-credentials',
  ios: true,
  inject: true,
  icons: [
    {
      src: path.resolve('public/favicon.png'),
      sizes: [96, 128, 192, 256, 384, 512, 1024],
      ios: true,
    },
  ],
};
