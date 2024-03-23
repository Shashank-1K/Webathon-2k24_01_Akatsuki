import React, { useEffect, useState } from "react";
import './Profile.css'
import { TbMessageChatbot } from "react-icons/tb";
import {
  Box,
  Flex,
  Button,
  Image,
  Avatar,
  Text,
  useColorMode,
  Stack,
  Link,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import HealthStatsCard from "./HealthStatsCard";

const Dashboard = () => {
    let [chatBox, setChatBox] = useState(false)
  const [fitnessData, setFitnessData] = useState();
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  let result;

  
  
  const handleLogout = () => {
    navigate("/");
  };

  const handleClick = () => {
    navigate("/"); // Replace "/another-page" with the desired URL
  };
  const handleClick1 = () => {
    navigate("/"); // Replace "/another-page" with the desired URL
  };

  
  return (
    <>
      
        <Box>
          <Box
            bg={colorMode === "light" ? "teal.500" : "pink.800"}
            px={4}
            py={2}
            color="white"
          >
            <Flex align="center" justify="space-between">
              <Flex align="center">
                
                <Text fontSize="xl" fontWeight="bold">
                  EZfit
                </Text>
              </Flex>
              <Flex align="center">
                <Avatar
                  size="sm"
                  name="N.Vamshi"
                  mr={2}
                />
                <Text fontWeight="bold">Vamshi</Text>
                <Button
                  colorScheme={colorMode === "light" ? "white" : "blue"}
                  variant="outline"
                  size="sm"
                  ml={4}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
                <Button
                  colorScheme={colorMode === "light" ? "white" : "blue"}
                  variant="outline"
                  size="sm"
                  ml={4}
                  onClick={toggleColorMode}
                >
                  Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
                </Button>
              </Flex>
            </Flex>
          </Box>
          <Flex>
            <Box
              w="20%"
              h="110vh"
              p={4}
              bg={colorMode === "light" ? "gray.100" : "gray.700"}
            >
              <Stack spacing={7}>
                <Link
                  href="/profile/Nutrition"
                  color={colorMode === "light" ? "teal.500" : "white"}
                  fontWeight="bold"
                  _hover={{ textDecoration: "none" }}
                  _focus={{ outline: "none" }}
                  as="a"
                  _notLast={{ mb: 2 }}
                >
                  Nutrition Estimator
                </Link>
                <Link
                  href="/profile/Meditation"
                  onClick={handleClick}
                  color={colorMode === "light" ? "teal.500" : "white"}
                  fontWeight="bold"
                  _hover={{ textDecoration: "none" }}
                  _focus={{ outline: "none" }}
                  as="a"
                  _notLast={{ mb: 2 }}
                >
                  Meditation
                </Link>
              </Stack>
            </Box>
            <Flex direction="column" w="80%" p={4}>
              <Stack spacing={4}>
                <HealthStatsCard
                  weight={70}
                  height={183}
                  BP={120/80}
                  step={5982}
                  heart={70}
                />
                
              </Stack>
            </Flex>
          </Flex>
        </Box>
        <div className='pos'>
     {chatBox ? <iframe title ="bot" className='box' src="http://localhost:4000/"></iframe> : <p></p>}
     <button className='btn btn-success mx-5 my-4 btn-lg ' onClick={() => setChatBox(!chatBox)}><TbMessageChatbot /></button>
 </div>
    </>
  );
};

export default Dashboard;