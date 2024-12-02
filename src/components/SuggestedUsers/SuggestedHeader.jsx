import { Avatar, Box, Flex, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      {/* Left Section with Avatar and Name */}
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="Ali" size={"lg"} src="/wolfpic.png" />
        <Text fontSize={14} fontWeight={"bold"}>
          Ali Al Hassan
        </Text>
      </Flex>

      {/* Right Section with Log Out Link */}
      <Link
        as={RouterLink}
        to={"/auth"}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        style={{ textDecoration: "none" }}
      >
        Log out
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
