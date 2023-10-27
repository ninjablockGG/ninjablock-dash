"use client";
import {
  ActionIcon,
  AspectRatio,
  Avatar,
  Badge,
  Button,
  Card,
  Container,
  Divider,
  Flex,
  Image,
  Table,
  Title,
} from "@mantine/core";
import { useAppProvider } from "./layout";
import { useEffect } from "react";
import Carousel from "nuka-carousel";
import { IconArrowLeft, IconArrowRight, IconEye } from "@tabler/icons-react";
import { MonthPickerInput } from "@mantine/dates";

export default () => {
  const { currentPage, setCurrentPage }: any = useAppProvider();

  useEffect(() => {
    setCurrentPage("dashboard");
  }, []);

  return (
    <Container fluid p={0}>
      <Flex direction={"column"} gap={"1rem"}>
        <Flex gap={"1rem"}>
          <Title fz={"1.2rem"} fw={600} style={{ color: "#00000080" }}>
            Lista de usuários
          </Title>
          <Button color="orange" size="xs">
            Criar Usuário
          </Button>
        </Flex>

        <Divider />

        <Carousel
          // disableAnimation
          dragThreshold={0.1}
          disableEdgeSwiping
          // withoutControls
          slidesToShow={5}
          cellSpacing={10}
          renderBottomCenterControls={() => {
            return null;
          }}
          renderCenterRightControls={({
            currentSlide,
            slideCount,
            nextSlide,
          }) => {
            return (
              currentSlide !== slideCount - 5 && (
                <ActionIcon size={"xl"} color="orange" onClick={nextSlide}>
                  <IconArrowRight />
                </ActionIcon>
              )
            );
          }}
          renderCenterLeftControls={({
            currentSlide,
            slideCount,
            previousSlide,
          }) => {
            return (
              currentSlide !== 0 && (
                <ActionIcon size={"xl"} color="orange" onClick={previousSlide}>
                  <IconArrowLeft />
                </ActionIcon>
              )
            );
          }}
        >
          {[...Array(20)].map(() => {
            return (
              <Card style={{ background: "#fff" }} p={0} withBorder shadow="md">
                <Flex direction={"column"}>
                  <Card.Section>
                    <AspectRatio ratio={16 / 9}>
                      <Image src="https://i.imgur.com/emmGqb9.jpg" />
                    </AspectRatio>
                  </Card.Section>
                  <Flex p={"1rem"} align={"center"} justify={"space-between"}>
                    <Flex direction={"column"}>
                      <Title fz={"1.4rem"}>Kiddi</Title>
                      <Badge size="xs" color="red">
                        Admin
                      </Badge>
                    </Flex>
                    <ActionIcon size={"lg"} color="orange" variant="light">
                      <IconEye />
                    </ActionIcon>
                  </Flex>
                </Flex>
              </Card>
            );
          })}
        </Carousel>

        <Divider />

        <Title fz={"1.2rem"} fw={600} style={{ color: "#00000080" }}>
          Log de Atualizações
        </Title>
        <Divider />
        <Flex align={"flex-start"}>
          <MonthPickerInput
            label="Filtrar Mês"
            placeholder="Filtrar data"
            value={new Date()}
            styles={{ calendarHeaderControlIcon: { width: "1rem" } }}
          />
        </Flex>
        <Table withRowBorders withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Atualização</Table.Th>
              <Table.Th>Seção</Table.Th>
              <Table.Th>Linguagem</Table.Th>
              <Table.Th>Data</Table.Th>
              <Table.Th>Usuário</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {[...Array(20)].map(() => (
              <Table.Tr>
                <Table.Td>Foi adicionado mais parceiros</Table.Td>
                <Table.Td>Parceiros</Table.Td>
                <Table.Td>Português</Table.Td>
                <Table.Td>24/10/2023 15:34</Table.Td>

                <Table.Td>
                  <Avatar
                    title="Kiddi"
                    src={"https://i.imgur.com/emmGqb9.jpg"}
                  />
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Flex>
    </Container>
  );
};
