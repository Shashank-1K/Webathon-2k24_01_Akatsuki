import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  Text,
  Stat,
  StatNumber,
  Icon,
  useToken,
} from "@chakra-ui/react";
import {
  GiBodyHeight,
  GiWeight,
  GiHeartBeats,
  GiRunningShoe,
} from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";

import { motion } from "framer-motion";

const AnimatedBox = motion(Box);

const HealthStatsCard = ({ weight, height, BP, step, heart }) => {
  const [bgColor] = useToken("colors", ["blue.500"]);

  const cardVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
  };
  const decimalheight = height;
  const minimizedheight = Math.floor(decimalheight);

  const number = step;
  const formattedNumber = number?.toLocaleString();
  const navigate = useNavigate()
  const [isopen,setIsopen] = useState(false);
  const user = JSON.parse(window.localStorage.getItem("currentuser"))
  console.log(user);
  let [userdetails, setUserDetails] = useState()
  useEffect(() => {
    getDoc(doc(db, "users", user?.uid))
      .then((userdata) => setUserDetails(userdata.data()))
      .catch((err) => console.error(err))
  }, [user?.uid])
  return (
    <Flex justify="center" align="center" gap={4} py={2} m={2}>
        {console.log(userdetails)}
      <AnimatedBox
        as="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.3 }}
        width="250px"
        p={4}
        shadow="md"
        borderWidth="2px"
        borderRadius="xl"
        bg={bgColor}
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Icon as={GiBodyHeight} boxSize={8} color="white" mb={4} />
        <Text fontSize="lg" fontWeight="bold" color="white" mb={2}>
          Height
        </Text>
        <Stat>
          <StatNumber color="white">{userdetails?.height} cm</StatNumber>
        </Stat>
      </AnimatedBox>

      <AnimatedBox
        as="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.3 }}
        width="250px"
        p={4}
        shadow="md"
        borderWidth="2px"
        borderRadius="xl"
        bg="green.500"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Icon as={GiWeight} boxSize={8} color="white" mb={4} />
        <Text fontSize="lg" fontWeight="bold" color="white" mb={2}>
          Weight
        </Text>
        <Stat>
          <StatNumber color="white">{userdetails?.weight} kg</StatNumber>
        </Stat>
      </AnimatedBox>

      <AnimatedBox
        as="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.3 }}
        width="250px"
        p={4}
        shadow="md"
        borderWidth="2px"
        borderRadius="xl"
        bg="red.500"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Icon as={FaHeartbeat} boxSize={8} color="white" mb={4} />
        <Text fontSize="lg" fontWeight="bold" color="white" mb={2}>
          BMI
        </Text>
        <Stat>
          {/* //120/80 */}
          <StatNumber color="white">
            {/* {
            BP[0]? JSON.stringify(BP[0] + "/" + BP[1]) : 120/80
            } */}
           {((parseInt(userdetails?.weight)*10000)/(parseInt(userdetails?.height)*parseInt(userdetails?.height))).toFixed(5)}
          </StatNumber>
        </Stat>
      </AnimatedBox>
      </Flex>
  );
};

export default HealthStatsCard;