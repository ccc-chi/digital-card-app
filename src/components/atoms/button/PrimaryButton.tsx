import { FC, memo, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  type?: "submit";
  mt?: number;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children ,type, onClick,mt} = props;
  return (
    <Button
      bg={"teal.600"}
      color={"white"}
      fontWeight={"bold"}
      w={"100%"}
      type={type}
      onClick={onClick}
      mt={mt}
    >
      {children}
    </Button>
  );
});
