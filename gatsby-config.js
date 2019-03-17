const path = require('path');
const packageJson = require('./package.json');

module.exports = {
  siteMetadata: {
    title: `Intro to Web Development`,
    author: packageJson.author,
    description: packageJson.description,
    siteUrl: packageJson.homepage,
    repositoryUrl: packageJson.repository.url,
    bugUrl: packageJson.bugs.url
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve(__dirname, 'instructions'),
        name: 'instructions'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve(__dirname, 'README.md'),
        name: 'readme'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-external-links',
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              className: 'header-link-icon'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590
            }
          },
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-emojis',
            options: {
              active: true,
              size: 32,
              class: 'emoji-icon'
            }
          }
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/config/typography'
      }
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Intro to Web Development',
        short_name: 'Web Dev Intro',
        start_url: '/',
        background_color: '#fdf6e3',
        theme_color: '#61dafb',
        display: 'standalone',
        icon: 'src/images/html5.png',
        legacy: true
      }
    },
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-netlify'
  ]
};
