import { Container, Flex, VStack, Box, Image } from '@chakra-ui/react'
import React from 'react'
import AuthForm from '../../components/AuthForm/AuthForm.jsx'

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/* Left hand side*/}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="auth.png" h={850} w={850} alt="Phone img" />
          </Box>
          {/*Right hand side */}
          <VStack spacing={4} align={"stretch"}>
            {/* The Auth Form (logo, inputs, etc.) */}
            <AuthForm />

            {/* Get the app text */}
            <Box pl={100}textAlign={"center"} mr={16} fontWeight="bold">
              Get the app.
            </Box>

            {/* Play Store and Microsoft logos */}
            <Flex pl={100} gap={5} justifyContent={"center"}>
              <Image
                src='/playstore.png'
                alt='Playstore logo'
                style={{ width: '150px' }}
               
              />
              <Image
                src='/microsoft.png'
                alt='Microsoft logo'
                style={{ width: '150px' }}
                mr={14}
              />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  )
}

export default AuthPage