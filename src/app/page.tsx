import { noise } from "@/utils/noise";
import {
  Button,
  Card,
  Center,
  Container,
  Flex,
  PasswordInput,
  TextInput,
  Title,
} from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  return (
    <Container
      style={{
        backgroundImage: `url(${noise})`,
        background: "hsl(32, 100%, 63%)",
      }}
      h={"100vh"}
      fluid
    >
      <Center w={"100%"} h={"100%"}>
        <Card p={"2rem"} withBorder shadow="md" style={{ background: "white" }}>
          <Flex
            direction={"column"}
            gap={"2rem"}
            justify={"center"}
            align={"center"}
          >
            <Flex direction={"column"} justify={"center"} align={"center"}>
              <Title
                fw={900}
                lh={"2rem"}
                fz={"2rem"}
                tt={"uppercase"}
                style={{ color: "black" }}
              >
                Ninja Block
              </Title>
              <Title
                fw={600}
                lh={"1rem"}
                fz={"1rem"}
                tt={"uppercase"}
                style={{ color: "black" }}
              >
                Dashboard
              </Title>
            </Flex>
            <Flex direction={"column"} gap={"1rem"}>
              <TextInput
                miw={"18rem"}
                label={"Usuário"}
                placeholder="Usuário"
                leftSection={<IconUser />}
              />
              <PasswordInput
                miw={"18rem"}
                label={"Senha"}
                placeholder="Senha"
                leftSection={<IconUser />}
              />
              <Link style={{ width: "100%" }} href={"/dashboard"}>
                <Button w={"100%"} color="orange">
                  Entrar
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Card>
      </Center>
    </Container>
  );
}
