"use client";
import { ListItem } from "@chakra-ui/react";
import { ListCustom } from "@glexis/components/ListCuston";
import { ListItemCustom } from "@glexis/components/ListItamCustom";
import Link from "next/link";

const items = [
  {
    id: "1",
    title: "Agendar tu cita",
    coment: "No se si se usara comentara",
    link: "https://api.whatsapp.com/send?phone=19452462119&text=Hola,%20quiero%20agendar%20una%20cita",
    icon: "instagram.jpg",
  },
  {
    id: "2",
    title: "Instagram",
    coment: "No se si se usara comentara",
    link: "https://www.instagram.com/glexislashme/",
    icon: "instagram.jpg",
  },
  {
    id: "3",
    title: "WhatsApp",
    coment: "No se si se usara comentara",
    link: "https://api.whatsapp.com/send?phone=19452462119&text=Hola,%20quiero%20mas%20informacion",
    icon: "instagram.jpg",
  },
];

export const HomePage = () => {
  return (
    <ListCustom>
      <Link href={"promo"}>
        <ListItem
          backgroundColor={"yellow.200"}
          padding={2}
          textAlign={"center"}
          borderRadius={"md"}
          borderWidth={2}
          borderColor={"yellow.500"}
          boxShadow="lg"
          textColor={"yellow.900"}
          fontWeight={"900"}
        >
          Promo de la semana
        </ListItem>
      </Link>
      {items.map((item) => (
        <ListItemCustom key={item.id} href={item.link}>
          {item.title}
        </ListItemCustom>
      ))}
    </ListCustom>
  );
};
