import { FC, memo, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  type?: "submit";
  mt?: number;
  disabled?: boolean;
  bg?: string;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, type, onClick, mt, disabled, bg = "teal.600" } = props;
  return (
    <Button
      bg={bg}
      color={"white"}
      fontWeight={"bold"}
      w={"100%"}
      type={type}
      onClick={onClick}
      mt={mt}
      disabled={disabled}
      _hover={{ bg }} // ホバー時の背景を通常と同じに
      _disabled={{
        opacity: 1,
        cursor: "default",
        bg, // 無効時も通常と同じ背景に
      }}
    >
      {children}
    </Button>
  );
});
