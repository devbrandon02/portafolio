import React from 'react'
import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image'
import { useTranslation } from 'gatsby-plugin-react-i18next'


const AboutMe = () => {
  const color = useColorModeValue('primary.300', 'white');
  const bg = useColorModeValue('white', '#171822');
  const {t} = useTranslation()

  return (
    <Flex  backgroundColor={bg} justifyContent={"center"}>
      <Flex width={"80%"}>
        <Box 
          display={"flex"} 
          justifyContent={"center"} 
          alignItems={"flex-start"} 
          width={"100%"}
          padding={10}
        >
          <Box rounded={"full"} width={"350px"} height={"350px"}>
            <StaticImage
              imgStyle={{
                borderRadius: "100%",
                width: "350px",
                height: "350px"
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
          <Box mt={5}>
            <Text textAlign={"justify"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Ullam accusamus similique neque cumque, facilis veritatis, nostrum consequuntur laboriosam nam doloremque nulla. 
              Voluptas nam similique aliquam voluptatem sint unde magni esse.
            </Text>
          </Box>
        </Box>
      </Flex>

    </Flex>
  )
}

export default AboutMe