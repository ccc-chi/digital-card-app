import { FC, memo } from 'react'

import { Box, Center, Text } from "@chakra-ui/react";
import { RegisterForm } from "../organisms/RegisterForm";

export const Register: FC = memo(() => {
  return (
    <>
      <Box pb={"200px"}>
        <h1>
          <Center my={5}>
            <Text fontSize={"3xl"} fontWeight={"bold"}>
              新規登録
            </Text>
          </Center>
        </h1>
        <RegisterForm />
      </Box>
    </>
  );
})