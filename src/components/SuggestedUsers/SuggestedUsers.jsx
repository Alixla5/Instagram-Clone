import { Box, Flex, VStack, Text, Link} from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
        {/*Left hand side */}
          Suggested for you
        </Text>
         {/*Right hand side */}
         <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.400"}} cursor={"pointer"}>
            See All
         </Text>
      </Flex>

      <SuggestedUser name='Dan Adams' followers={1395} avatar='https://bit.ly/dan-abramov' />
      <SuggestedUser name='Ryan Flo' followers={687} avatar='https://bit.ly/ryan-florence' />
      <SuggestedUser name='Chris Pointus' followers={986} avatar='https://bit.ly/code-beast' />
    
      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        2024 Bulit By {" "}
        <Link href='https://github.com/Alixla5' target='_blank' color="blue.500" fontSize={14}>
        Ali Al Hassan
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
