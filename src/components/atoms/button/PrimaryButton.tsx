import { FC, memo, ReactNode } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  bg?: string;
  mt?: number;
  onClick?: () => void;
} & ButtonProps;

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, bg = "teal.600", onClick, mt, ...rest } = props;
  return (
    <Button
      bg={bg}
      color={"white"}
      fontWeight={"bold"}
      w={"100%"}
      type={rest.type ?? "submit"}
      onClick={onClick}
      mt={mt}
      disabled={rest.isDisabled}
      _hover={bg} // ホバー時の背景を通常と同じに
      _disabled={{
        opacity: 1,
        cursor: "not-allowed",
        bg, // 無効時も通常と同じ背景に
      }}
      {...rest}
    >
      {children}
    </Button>
  );
});
