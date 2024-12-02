import {
  Avatar,
  Box,
  Divider,
  Flex,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react"; // Import Image from Chakra UI
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Comment from "../Comment/Comment";

const ProfilePost = ({ img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* Post GridItem */}
      <GridItem
        cursor="pointer"
        borderRadius={4}
        overflow="hidden"
        border="1px solid"
        borderColor="whiteAlpha.300"
        position="relative"
        aspectRatio={1 / 1}
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.700"
          transition="all 0.3s ease"
          zIndex={1}
          justifyContent="center"
        >
          <Flex alignItems="center" justifyContent="center" gap={50}>
            <Flex>
              <AiFillHeart size={20} />
              <Text fontWeight="bold" ml={2}>
                12
              </Text>
            </Flex>
            <Flex>
              <FaComment size={20} />
              <Text fontWeight="bold" ml={2}>
                9
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Image
          src={img}
          alt="Profile Post"
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </GridItem>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={{ base: "3xl", md: "5xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg="black" pb={5}>
            {/* Main Layout */}
            <Flex gap={6} w="full" align="start">
              {/* Left Section: Image */}
              <Box
                borderRadius={4}
                overflow="hidden"
                border="1px solid"
                borderColor="whiteAlpha.300"
                flex={1.5}
              >
                <Image src={img} alt="Profile Post" />
              </Box>

              {/* Right Section */}
              <Flex
                flex={1}
                flexDir="column"
                px={6}
                justifyContent="flex-start"
                gap={4}
              >
                {/* Header Section */}
                <Flex alignItems="center" justifyContent="space-between">
                  <Flex alignItems="center" gap={4}>
                    <Avatar src="/wolfpic.png" size="sm" name="Ali Al Hassan" />
                    <Text fontWeight="bold" fontSize="md">
                      Ali Al Hassan
                    </Text>
                  </Flex>
                  <Box
                    _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                    borderRadius={4}
                    p={1}
                  >
                    <MdDelete size={20} cursor="pointer" />
                  </Box>
                </Flex>

                {/* Divider */}
                <Divider my={4} borderColor="gray.500"  />

                {/* Comments Section */}
                <VStack align="start" maxH="350px" overflowY="auto" spacing={4}>
                  <Comment
                    createdAt="1d ago"
                    username="Ali Al Hassan"
                    profilePic="/Yoda.jpg"
                    text="The fit on Yoda is wild"
                  />
                  <Comment
                    createdAt="16h ago"
                    username="MJF"
                    profilePic="/mjfpic.webp"
                    text="Lame pic no one cares"
                  />
                  <Comment
                    createdAt="5h ago"
                    username="Peter Parker"
                    profilePic="/spiderpic.jpg"
                    text="Yes sir that fit is indeed wild"
                  />
                </VStack>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
