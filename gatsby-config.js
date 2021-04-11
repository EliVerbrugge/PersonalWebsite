module.exports = {
  siteMetadata: {
    title: "Eli's Web Portfolio",
  },
  plugins: [{
        resolve: 'gatsby-remark-emojis',
        options: {
          // Deactivate the plugin globally (default: true)
          active : true,
          // Add a custom css class
          class  : 'emoji-icon',
          // In order to avoid pattern mismatch you can specify
          // an escape character which will be prepended to the
          // actual pattern (e.g. `#:poop:`).
          escapeCharacter : '#', // (default: '')
          // Select the size (available size: 16, 24, 32, 64)
          size   : 64,
          // Add custom styles
          styles : {
            display      : 'inline',
            margin       : '0',
            'margin-top' : '1px',
            position     : 'relative',
            top          : '5px',
            width        : '25px'
          }
        }
      },
      {
        resolve: 'gatsby-plugin-web-font-loader',
        options: {
          google: {
            families: ['Roboto', 'Droid Serif']
          }
        }
      },
      {
        resolve: 'gatsby-plugin-next-seo',
        options: {
         title: "Eli Verbrugge"
        },
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `Test`,
          short_name: `GatsbyJS`,
          start_url: `/`,
          background_color: `#f7f0eb`,
          theme_color: `#a2466c`,
          display: `standalone`,
          icon: `src/images/me.png`,
          icon_options: {
            // For all the options available,
            // please see the section "Additional Resources" below.
            purpose: `any maskable`,
          },
        },
      },
    ],
};
