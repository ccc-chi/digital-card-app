import { FC, memo } from 'react'
import { UseFormRegisterReturn, FieldError } from "react-hook-form";
import {
  Flex,
  Input,
  Text,
} from "@chakra-ui/react";

type Props = {
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
};
export const SnsInput: FC<Props> = memo((props) => {
  const { label,placeholder,register,error  } = props;
  return(
    <>
    <Flex alignItems={"center"} gap={1}>
      <Text minW={"80px"} textAlign={"right"}>
        {label}
      </Text>
      <Input
        placeholder={placeholder}
        {...register}
      />
    </Flex>
    {error?.type === "pattern" && (
      <Text color="red.500" fontSize="xs" textAlign={'right'} mt={-3}>
        入力は英数字のみ
      </Text>
    )}
    </>
  )
})