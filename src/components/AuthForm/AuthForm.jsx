import { Box, Input, Image, VStack, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [inputs,setInputs] = useState({
    email:'',
    password:'',
    confirmPassword:''

  });
  const handleAuth = () => {
    if (!inputs.email || !inputs.password ){
      alert("Please fill out all fields");
      return
    }
    navigate("/");

  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center"> {/* Center everything */}
      {/* Auth Form Box */}
      <Box border={"2px solid gray"} borderRadius={4} padding={5} width={"100%"} maxW={"400px"}>
        <VStack spacing={5}>
          <Image src='/logo.png' h={24} cursor={"pointer"} alt='Instagram' />
          <Input placeholder='Email' fontSize={"14"} type='email'
          value={inputs.email}
          onChange={(e) => setInputs({...inputs,email:e.target.value})} 
          />
          <Input placeholder='Password' fontSize={"14"} type='password'
          value={inputs.password}
          onChange={(e) => setInputs({...inputs,password:e.target.value})} />
          {!isLogin ? (
            <Input placeholder='Confirm Password' fontSize={"14"} type='password' 
            value={inputs.confirmPassword}
          onChange={(e) => setInputs({...inputs,confirmPassword:e.target.value})}/>
          ) : null}
          <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14} onClick={handleAuth}>
            {isLogin ? "Log in" : "Sign Up"}
          </Button>

          {/*---------OR TEXT------------*/}
          <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>
          
          {/* Google Login */}
          <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
            <Image src="/google.png" w={5} alt='Google logo' />
            <Text mx={"2"} color={"blue.500"}>
              Log in with Google
            </Text>
          </Flex>
        </VStack>
      </Box>

      {/* Account Toggle Box */}
      <Box border={"1px solid gray"} borderRadius={4} padding={5} mt={4} width={"100%"} maxW={"400px"}>
        <Flex alignItems={"center"} justifyContent={"center"}> {/* Flex to center the text */}
          {/* Text for the account question */}
          <Text mx={2} fontSize={14} whiteSpace="nowrap">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Text>

          {/* Toggle between login and signup */}
          <Text
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
            mx={2}
            fontSize={14}
            whiteSpace="nowrap"
          >
            {isLogin ? "Sign up" : "Log in"}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default AuthForm;