import React from "react"
import { SEO } from "../components/SEO"
import Navbar from "../components/navbar/Navbar"
import { ColorModeScript, theme, ChakraProvider } from "@chakra-ui/react"
import themeCustom from "../@chakra-ui/gatsby-plugin/theme"
import Hero from "../components/Hero"
import { graphql } from "gatsby"
import AboutMe from "../components/AboutMe"


const HomePages = () => {
  return (
    <>
      <ChakraProvider theme={themeCustom}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <main>
          <Navbar />
          <Hero />
          <AboutMe />
        </main>
      </ChakraProvider>
    </>
  )
}

export default HomePages

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export const Head = () => (
  <SEO
    title="Brandon - Desarrollador de Software | ✨ Transformando Ideas en Realidad"
    children={<HomePages />}
    description={""}
    pathname={"/icon.png"}
  />
)