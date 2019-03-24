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
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.icon\.svg$/
        }
      }
    },
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
              maxWidth: 700
            }
          },
          'gatsby-remark-prismjs'
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
    {
      resolve: 'gatsby-plugin-klipse-mk',
      options: {
        klipseSettings: {
          selector_eval_js: '.language-javascript',
          selector_eval_html: '.language-html',
          codemirror_options_in: {
            lineWrapping: true,
            lineNumbers: true
          },
          codemirror_options_out: {
            lineWrapping: true,
            lineNumbers: true
          }
        }
      }
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Intro to Web Development',
        short_name: 'WebDev Intro',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#e44d26',
        display: 'standalone',
        icon: 'src/images/html5.png',
        legacy: true
      }
    },
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-netlify'
  ]
};
