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
import { SnsInput } from "../atoms/SnsInput";
import { addUser } from "../../utils/supabaseFunction";
import { useNavigate } from "react-router-dom";

enum Skills {
  react = 1,
  typeScript = 2,
  Github = 3,
}

type FormValues = {
  user_id: string;
  name: string;
  description: string;
  skill: Skills;
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

  const navigate = useNavigate();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    try {
      // データを追加
      await addUser(
        data.user_id,
        data.name,
        data.description,
        data?.github_id,
        data?.qiita_id,
        data?.x_id,
        data.skill
      );
      navigate("/");
    } catch (error) {
      console.error("addUserError", error);
      alert("登録に失敗しました");
    }
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
              <Text color={"red.500"} fontSize={"ms"}>
                入力は必須です
              </Text>
            )}
            {errors?.user_id?.type === "pattern" && (
              <Text color={"red.500"} fontSize={"ms"}>
                入力は英数字のみです
              </Text>
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
              <Text color={"red.500"} fontSize={"ms"}>
                入力は必須です
              </Text>
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
              <Text color={"red.500"} fontSize={"ms"}>
                入力は必須です
              </Text>
            )}
          </Box>

          <Box>
            <Flex gap={1} alignItems={"baseline"}>
              <Text mb={2}>好きな技術</Text>
              <Text color={"red.500"} fontSize={"xs"} fontWeight={"bold"}>
                必須
              </Text>
            </Flex>
            <Select
              placeholder="選択してください"
              {...register("skill", { required: true, valueAsNumber: true })}
            >
              <option value={Skills.react}>React</option>
              <option value={Skills.typeScript}>TypeScript</option>
              <option value={Skills.Github}>Github</option>
            </Select>
            {errors?.skill?.type === "required" && (
              <Text color={"red.500"} fontSize={"ms"}>
                入力は必須です
              </Text>
            )}
          </Box>

          <Text fontWeight={"bold"} mt={4}>
            SNS（任意）
          </Text>
          <SnsInput
            label="GitHub："
            placeholder="GitのID"
            register={register("github_id", {
              required: false,
              pattern: /^[A-Za-z]+$/i,
            })}
            error={errors.github_id}
          />
          <SnsInput
            label="X："
            placeholder="XのID"
            register={register("x_id", {
              required: false,
              pattern: /^[A-Za-z]+$/i,
            })}
            error={errors.x_id}
          />
          <SnsInput
            label="Qiita："
            placeholder="QiitaのID"
            register={register("qiita_id", {
              required: false,
              pattern: /^[A-Za-z]+$/i,
            })}
            error={errors.qiita_id}
          />
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
