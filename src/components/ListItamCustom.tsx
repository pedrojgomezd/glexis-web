import { Link, ListItem } from "@chakra-ui/react";
import { ReactNode } from "react";

export const ListItemCustom = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => (
  <Link href={href} target="_blank">
    <ListItem
      backgroundColor={"white"}
      padding={2}
      textAlign={"center"}
      borderRadius={"md"}
      borderWidth={2}
      borderColor={"gray.500"}
      boxShadow="lg"
    >
      {children}
    </ListItem>
  </Link>
);
