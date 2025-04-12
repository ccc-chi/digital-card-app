import { FC, memo } from 'react'

import { Box, Button, Center, Flex, Input, Select, Stack, Text, Textarea } from '@chakra-ui/react'

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
        <form action="">
          <Box bg={"white"} p={4} borderRadius="md" boxShadow="md" w={"100%"}>
            <Stack spacing={4}>
              <Box>
                <Text mb={2}>好きな英単語</Text>
                <Input placeholder="coffee" />
              </Box>

              <Box>
                <Flex gap={1} alignItems={"baseline"}>
                  <Text mb={2}>お名前</Text>
                  <Text color={"red.500"} fontSize={"xs"} fontWeight={"bold"}>
                    必須
                  </Text>
                </Flex>
                <Input placeholder="名前を入力してください" />
              </Box>

              <Box>
                <Flex gap={1} alignItems={"baseline"}>
                  <Text mb={2}>自己紹介</Text>
                  <Text color={"red.500"} fontSize={"xs"} fontWeight={"bold"}>
                    必須
                  </Text>
                </Flex>
                <Textarea
                  placeholder="<h1>HTMLタグも使えます</h1>"
                  minH={"100px"}
                />
              </Box>

              <Box>
                <Flex gap={1} alignItems={"baseline"}>
                  <Text mb={2}>好きな技術</Text>
                  <Text color={"red.500"} fontSize={"xs"} fontWeight={"bold"}>
                    必須
                  </Text>
                </Flex>
                <Select placeholder="選択してください">
                  <option value="1">React</option>
                  <option value="2">TypeScript</option>
                  <option value="3">Github</option>
                </Select>
              </Box>

              <Text fontWeight={"bold"} mt={4}>
                SNS（任意）
              </Text>
              <Flex alignItems={"center"} gap={1}>
                <Text mb={2} minW={"80px"} textAlign={"right"}>
                  Github：
                </Text>
                <Input placeholder="GithubのID" />
              </Flex>
              <Flex alignItems={"center"} gap={1}>
                <Text mb={2} minW={"80px"} textAlign={"right"}>
                  X：
                </Text>
                <Input placeholder="XのID" />
              </Flex>
              <Flex alignItems={"center"} gap={1}>
                <Text mb={2} minW={"80px"} textAlign={"right"}>
                  Qiita：
                </Text>
                <Input placeholder="QiitaのID" />
              </Flex>
              <Button
                mt={4}
                bg={"teal.600"}
                color={"white"}
                fontWeight={"bold"}
                w={"100%"}
              >
                登録
              </Button>
            </Stack>
          </Box>
        </form>
      </Box>
    </>
  );
})