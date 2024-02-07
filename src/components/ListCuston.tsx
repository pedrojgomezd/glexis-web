import { List } from "@chakra-ui/react";
import { ReactNode } from "react";

export const ListCustom = ({ children }: { children: ReactNode }) => (
  <List gap={4} display={"flex"} flexDirection={"column"}>
    {children}
  </List>
);
