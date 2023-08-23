import React, { useState } from 'react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Avatar, Box, Button, Flex, IconButton, ListItem, Text, UnorderedList, WrapItem, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { US, ES } from 'country-flag-icons/react/3x2';
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { FaChild } from "@react-icons/all-files/fa/FaChild";
import { FaBriefcase } from "@react-icons/all-files/fa/FaBriefcase";
import { FaBookmark } from "@react-icons/all-files/fa/FaBookmark";
import { MdSettings } from "@react-icons/all-files/md/MdSettings";
import { FaPhone } from "@react-icons/all-files/fa/FaPhone";
import { FaMoon } from "@react-icons/all-files/fa/FaMoon";
import { FaSun } from "@react-icons/all-files/fa/FaSun";
import AvatarLogo from '../../images/mifoto.png'
import { useI18next } from 'gatsby-plugin-react-i18next';
import { useTranslation } from 'gatsby-plugin-react-i18next'


const Navbar = () => {
  const {changeLanguage} = useI18next();
  const { toggleColorMode, colorMode } = useColorMode()
  const color = useColorModeValue('primary.300', 'white');
  const bg = useColorModeValue('#F2F2F2', '#181c28');
  const [displayMobileMenu, changeDisplayMobileMenu] = useState('none');
  const {t} = useTranslation()


  const [languajes, setLanguajes] = useState([
    { code: "US" },
    { code: "ES" },
  ]);

  const [listMenu, setlistMenu] = useState([
    {
      route: "/",
      name: "Home",
      icon: <AiOutlineHome />
    },
    {
      route: "/",
      name: "About",
      icon: <FaChild />
    },
    {
      route: "/",
      name: "Service",
      icon: <MdSettings />
    },
    {
      route: "/",
      name: "Portfolio",
      icon: <FaBriefcase />
    },
    {
      route: "/",
      name: "Resume",
      icon: <FaBookmark />
    },
    {
      route: "/",
      name: "Contact",
      icon: <FaPhone />
    },
  ]);

  return (
    <>
      <Flex
        display={"flex"}
        justifyContent={"space-between"}
        width={"100%"}
        position={{base: "relative", lg: "absolute"}}
        padding={{ base: "5", lg: "10" }}
        alignItems={"center"}
        overflow={"hidden"}
        backgroundColor={bg}
      >
        <Box>
          <Text
            display={{ base: "none", lg: "block" }}
            color={"primary.200"}
            fontSize={"20px"}
            textTransform={"uppercase"}
            fontWeight={"bold"}>{"<DevBrandon/>"}
          </Text>

          <Text
            display={{ base: "block", lg: "none" }}
            color={"primary.200"}
            fontSize={"20px"}
            textTransform={"uppercase"}
            fontWeight={"bold"}>{"<DB/>"}
          </Text>
        </Box>

        <Box display={{ base: "none", lg: "flex" }} justifyContent={"center"}>
          <UnorderedList gap={2} display={"flex"}>
            {listMenu.map((item) => (
              <Box key={item.name} display={"flex"} gap={1} alignItems={"center"} justifyContent={"center"} _hover={{
                color: "primary.200",
                cursor: "pointer",
              }}>
                <ListItem
                  display={"flex"}
                  gap={2}
                  fontSize={14}
                  textTransform={"uppercase"}
                  listStyleType={"none"}
                  textDecoration={"none"}
                  fontWeight={"semibold"}
                  padding={0}
                  margin={0}
                  fontFamily={"Roboto', sans-serif"}
                  alignItems="center"
                  height="40px"
                >
                  <Box>
                    <Button leftIcon={item.icon} colorScheme='teal' variant='ghost'>
                      <Text textTransform={"capitalize"} color={color}>
                        {t(item.name)}
                      </Text>
                    </Button>
                  </Box>
                </ListItem>
              </Box>
            ))}
          </UnorderedList>
        </Box>

        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={1}>
          <Flex display={{ base: "none", lg: "flex" }} justifyContent={{ base: "flex-start", lg: "flex-end" }}>
            <UnorderedList gap={4} display={"flex"} justifyContent={"center"} alignItems={"center"}>
              <Box flexDirection={"row"} display={"flex"}>
                {languajes.map((item) => (
                  <Box key={item.code} flexDirection={"row"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    {
                      item.code === "ES"
                        ? (
                          <Button 
                            leftIcon={<ES width={20} title="Español" />} 
                            colorScheme='teal' 
                            variant='ghost'
                            padding={2}
                            onClick={() => changeLanguage("es")}
                          >
                            <Text fontSize={14} color={color}
                            >{item.code}</Text>
                          </Button>
                        )
                        : (<Button 
                            leftIcon={<US width={20} title="Ingles" />} 
                            colorScheme='teal' 
                            variant='ghost'
                            onClick={() => changeLanguage("en")}
                          >
                          <Text fontSize={14} color={color}>
                            {item.code}
                          </Text>
                        </Button>)
                    }
                  </Box>
                ))}
              </Box>
            </UnorderedList>
          </Flex>

          <Box>
            <IconButton
              rounded="full"
              size="lg"
              colorScheme='teal'
              variant={"ghost"}
              backgroundColor={"transparent"}
              color={color}
              onClick={toggleColorMode} icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
              aria-label={''} />
          </Box>

          <Box display={{ base: "block", lg: "none" }}>
            <IconButton
              aria-label="Open Menu"
              size="lg"
              backgroundColor={"transparent"}
              icon={
                displayMobileMenu === 'none'
                  ? (<HamburgerIcon onClick={() => changeDisplayMobileMenu("flex")} boxSize={6} />)
                  : (<CloseIcon onClick={() => changeDisplayMobileMenu("none")} />)
              }
            />
          </Box>

          <Box>
            <WrapItem>
              <Avatar name='Brandon Rodriguez' src={AvatarLogo} />
            </WrapItem>
          </Box>
        </Box>
      </Flex>


      <Flex flexDir="column" display={displayMobileMenu}>
        <Flex flexDir="column" align="center">
          {listMenu.map((item) => (
            <Button key={item.name} variant="ghost" aria-label={item.name} w="100%">
              {t(item.name)}
            </Button>
          ))}
        </Flex>
      </Flex>
    </>
  );
}

export default Navbar;