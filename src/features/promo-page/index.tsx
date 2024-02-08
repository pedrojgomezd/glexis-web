import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { Children } from "react";

export const PromoPage = () => {
  return (
    <Box>
      <Heading mb={4}>Promociones</Heading>
      <SimpleGrid columns={2} spacing={4}>
        <CardCustom title="Microshading" src="/promo/1.jpeg" />
        <CardCustom title="Microblading" src="/promo/2.jpeg" />
        <CardCustom title="Extensiones de pestañas" src="/promo/3.jpeg" />
        <CardCustom title="Todo para ti!" src="/promo/4.jpeg" />
      </SimpleGrid>
    </Box>
  );
};

const CardCustom = ({ src, title }: { src: string; title: string }) => (
  <Card data-type="Card" overflow="hidden" variant="elevated">
    <img data-type="Image" alt="Caffe Latte" src={src} />
    <Stack data-type="Stack">
      <CardBody data-type="CardBody">
        <Heading data-type="Heading" size="md">
          {title}
        </Heading>
      </CardBody>
      <CardFooter data-type="CardFooter">
        <Button
          data-type="Button"
          type="button"
          variant="outline"
          colorScheme="blue"
          as={Link}
          href={
            "https://api.whatsapp.com/send?phone=19452462119&text=Hola,%20quiero%20mas%20informacion-promo"
          }
        >
          Saber mas
        </Button>
      </CardFooter>
    </Stack>
  </Card>
);
