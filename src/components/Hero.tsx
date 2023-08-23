import { DownloadIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { StaticImage } from 'gatsby-plugin-image'

const Hero = () => {
  const { t } = useTranslation()
  const color = useColorModeValue('primary.300', 'white');
  const bg = useColorModeValue('#F2F2F2', '#181c28');

  return (
    <>
      <Flex backgroundColor={bg}
        overflow={"auto"} width={"100%"} height={"100vh"} flexDirection={{ base: "column", lg: "row" }}>
        <Flex mt={{ base: 20, lg: 0 }} justifyContent={"center"} alignItems={"center"} width={"100%"}>
          <Flex
            width={{ base: "100%", lg: "100%" }}
            textAlign={"left"}
            justifyContent={"center"}
            padding={{ base: 10, lg: 20 }}
            gap={2}
            height={"100%"}
            flexDirection={"column"}
          >
            <Box display={"flex"} alignItems={"center"} gap={2}>
              <Box backgroundColor={'primary.300'} height={"2px"} width={"30px"}></Box>
              <Text color={"primary.300"}>{t('Hello')}</Text>
            </Box>
            <Box>
              <Heading
                fontWeight={"bold"}
                gap={{ base: "0", lg: "3" }}
                display={"flex"}
                fontFamily={"Poppins, sans-serif"}
                flexDirection={{ base: "column", lg: "row" }}
                as={"h1"}>
                {t("I'm")}
                <Heading color={"primary.300"} as={"h1"}>Brandon</Heading> {" "} Rodriguez
              </Heading>
            </Box>
            <Box>
              <Text textAlign={{ base: "left", lg: "justify" }}>
                {t("I'm a skilled software geek specializing in mobile and web tech. I've also got a savvy side in digital marketing to add some extra flair. Based in Colombia, I'm all in for global opportunities to sprinkle my coding expertise worldwide.")}
              </Text>

              <Box mt={20}>
                <Button rightIcon={<DownloadIcon />} colorScheme='teal'>
                  <VStack>
                    <Text fontSize={"14px"} textTransform={"uppercase"}>{t("Download CV")}</Text>
                  </VStack>
                </Button>
              </Box>
            </Box>
          </Flex>
        </Flex>
        <Box
          display={{ base: "none", lg: "flex" }}
          justifyContent={"center"}
          alignItems={"center"}
          width={"90%"}
          padding={10}
          height={"100%"}
        >
          <StaticImage
            layout='constrained'
            formats={["auto", "webp", "avif"]}
            quality={100}
            objectFit='contain'
            src='../images/hero-devices.png'
            alt={'hero-devices'}
          />
        </Box>
      </Flex>
    </>
  )
}

export default Hero