import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `👨‍💻 Desarrollador de Software | 🚀 Creando Soluciones Innovadoras | Brandon Rodriguez`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `
      🔥 Apasionado desarrollador de software especializado en crear soluciones innovadoras para desafíos tecnológicos. 
      Explora mi portafolio para descubrir proyectos y aplicaciones que demuestran mi experiencia en desarrollo front-end, back-end y en diversas tecnologías. 
      ¡Contáctame para colaborar en tu próximo proyecto! 💬
    `,
    image: `/gatsby-icon.png`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap", "@chakra-ui/gatsby-plugin", "react-i18next", "i18next", "@chakra-ui/icons", "country-flag-icons", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`en`, `es`],
        defaultLanguage: `en`,
        siteUrl: `https://example.com`,
        trailingSlash: 'always',
        i18nextOptions: {
          interpolation: {
            escapeValue: false
          },
          keySeparator: false,
          nsSeparator: false
        },
        pages: [
          {
            matchPath: '/:lang?/blog/:uid',
            getLanguageFromPath: true,
            excludeLanguages: ['es']
          },
          {
            matchPath: '/preview',
            languages: ['en']
          }
        ]
      }
    }
  ]
};

export default config;
