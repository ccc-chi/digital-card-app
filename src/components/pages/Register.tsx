import { FC, memo } from 'react'

import { Box, Button, Center, Flex, Input, Select, Stack, Text, Textarea } from '@chakra-ui/react'

export const Register: FC = memo(() => {
  return(
    <>
    <Box pb={'200px'}>
      <h1>
        <Center my={5} >
          <Text fontSize={'3xl'} fontWeight={'bold'}>新規登録</Text>
        </Center>
      </h1>
      <form action="">

        <Box bg={"white"} p={4} borderRadius="md" boxShadow="md" w={"100%"}>
          <Stack spacing={2}>
            <Text mt={2}>好きな英単語</Text>
            <Input placeholder='coffee' />

            <Flex gap={1} alignItems={'baseline'}>
              <Text mt={2}>お名前</Text>
              <Text color={'red.500'} fontSize={'xs'} fontWeight={'bold'}>必須</Text>
            </Flex>
            <Input />
            
            <Flex gap={1} alignItems={'baseline'}>
              <Text mt={2}>自己紹介</Text>
              <Text color={'red.500'} fontSize={'xs'} fontWeight={'bold'}>必須</Text>
            </Flex>
            <Textarea placeholder='<h1>HTMLタグも使えます</h1>' minH={'100px'} />
            
            <Flex gap={1} alignItems={'baseline'}>
              <Text mt={2}>好きな技術</Text>
              <Text color={'red.500'} fontSize={'xs'} fontWeight={'bold'}>必須</Text>
            </Flex>
            <Select placeholder='選択してください'>
              <option value='option1'>React</option>
              <option value='option1'>TypeScript</option>
              <option value='option1'>Github</option>
            </Select>
          </Stack>

          <Text fontWeight={'bold'} mt={4}>SNS（任意）</Text>
          <Stack spacing={2}>
            <Box alignItems={'center'} gap={1}>
              <Text>Github：</Text>
              <Input placeholder='GithubのID' />
            </Box>
            <Box alignItems={'center'} gap={1}>
              <Text>X：</Text>
              <Input placeholder='XのID' />
            </Box>
            <Box alignItems={'center'} gap={1}>
              <Text>Qiita：</Text>
              <Input placeholder='QiitaのID' />
            </Box>
            <Button mt={4} bg={'teal.600'} color={'white'} fontWeight={'bold'} w={'100%'}>登録</Button>
          </Stack>
        </Box>
      </form>
    </Box>
    
    </>
  )
})