import React from 'react'
import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image'
import { useTranslation } from 'gatsby-plugin-react-i18next'


const AboutMe = () => {
  const color = useColorModeValue('primary.300', 'white');
  const bg = useColorModeValue('white', '#171822');
  const { t } = useTranslation()

  return (
    <Flex flexDirection={"column"}  alignItems={"center"} backgroundColor={bg} justifyContent={"center"}>
      <Flex alignItems={"center"} justifyContent={"center"} flexDirection={{base: "column", lg: "row"}} width={{base: "100%", lg: "80%"}}>
        <Box
          display={"flex"}
          justifyContent={{lg: "center"}}
          width={"100%"}
          padding={{ base: 0, lg: '20' }}
        >
          <Box m={0} rounded={"full"} width={{base: "250px", lg: "350px"}} height={{base: "250px", lg: "350px"}}>
            <StaticImage
              imgStyle={{
                borderRadius: "100%",
              }}
              objectFit='contain'
              src='../images/mifoto.png'
              alt={''}
            />
          </Box>
        </Box>
        <Box padding={10} width={"100%"}>
          <Flex gap={4} alignItems={"center"}>
            <Box backgroundColor={'primary.300'} height={"2px"} width={"30px"}></Box>
            <Heading fontSize={"28px"} as={"h3"}>{t("About")}</Heading>
          </Flex>
          <Flex flexDirection={"column"} gap={5} mt={5}>
            <Text textAlign={{ base: "left", lg: "justify" }}>
              {t("👨‍💻 I am a passionate web developer and lover of mobile technology based in Colombia, but with a global vision. My experience ranges from creating compelling user interfaces using technologies like React and Tailwind CSS, to building robust backend systems using Node.js and Golang.")}
            </Text>

            <Text textAlign={{ base: "left", lg: "justify" }}>
              {t("🏗️ My knowledge in architecture and design patterns allows me to devise efficient and elegant technical solutions. However, my focus is not limited to just coding. My extra touch lies in digital marketing 📈, where I combine my technical prowess with effective strategies to make a full impact on projects.")}
            </Text>

            <Text textAlign={{ base: "left", lg: "justify" }}>
              {t("🌍 I am excited to embark on global opportunities to share my experience and contribute to technological innovation in various parts of the globe. My passion for software development 💡 and my ability to merge technology and marketing allow me to create unique and effective solutions that drive progress in the digital world.")}
            </Text>
          </Flex>
        </Box>
      </Flex>

      <Box width={"80%"} mt={10}>
        skill
        <Box backgroundColor={"black"} width={"100%"} height={"10px"}>
          <Box backgroundColor={"yellow"} width={"20%"} height={"10px"}>
            <Text>20%</Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export default AboutMe