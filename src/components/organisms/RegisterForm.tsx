import { FC, memo } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

type FormValues = {
  user_id: string;
  name: string;
  description: string;
  github_id: string;
  x_id: string;
  qiita_id: string;
};

export const RegisterForm: FC = memo(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box bg={"white"} p={4} borderRadius="md" boxShadow="md" w={"100%"}>
        <Stack spacing={4}>
          <Box>
            <Text mb={2}>好きな英単語</Text>
            <Input
              placeholder="coffee"
              {...register("user_id", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.user_id?.type === "required" && (
              <p style={{ color: "red" }}>入力は必須です</p>
            )}
            {errors?.user_id?.type === "pattern" && (
              <p style={{ color: "red" }}>入力は英数字のみです</p>
            )}
          </Box>

          <Box>
            <Flex gap={1} alignItems={"baseline"}>
              <Text mb={2}>お名前</Text>
              <Text color={"red.500"} fontSize={"xs"} fontWeight={"bold"}>
                必須
              </Text>
            </Flex>
            <Input
              placeholder="名前を入力してください"
              {...register("name", { required: true })}
            />
            {errors?.name?.type === "required" && (
              <p style={{ color: "red" }}>入力は必須です</p>
            )}
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
              {...register("description", { required: true })}
            />
            {errors?.description?.type === "required" && (
              <p style={{ color: "red" }}>入力は必須です</p>
            )}
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
            <Input
              placeholder="GithubのID"
              {...register("github_id", { required: false })}
            />
          </Flex>
          <Flex alignItems={"center"} gap={1}>
            <Text mb={2} minW={"80px"} textAlign={"right"}>
              X：
            </Text>
            <Input
              placeholder="XのID"
              {...register("x_id", { required: false })}
            />
          </Flex>
          <Flex alignItems={"center"} gap={1}>
            <Text mb={2} minW={"80px"} textAlign={"right"}>
              Qiita：
            </Text>
            <Input
              placeholder="QiitaのID"
              {...register("qiita_id", { required: false })}
            />
          </Flex>
          <Button
            mt={4}
            bg={"teal.600"}
            color={"white"}
            fontWeight={"bold"}
            w={"100%"}
            type="submit"
          >
            登録
          </Button>
        </Stack>
      </Box>
    </form>
  );
});
