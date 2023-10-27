"use client";

import {
  AspectRatio,
  Avatar,
  Button,
  Container,
  Flex,
  Image,
  Select,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { useAppProvider } from "../layout";
import { useEffect } from "react";

export default () => {
  const { currentPage, setCurrentPage }: any = useAppProvider();

  useEffect(() => {
    setCurrentPage("projects");
  }, []);

  return (
    <Container fluid p={0}>
      <Flex direction={"column"} gap={"1rem"}>
        <Flex align={"end"} gap={"1rem"}>
          <Title fz={"1.2rem"} fw={600} style={{ color: "#00000080" }}>
            Lista de Projetos
          </Title>
          <Button color="orange" size="xs">
            Adicionar Projeto
          </Button>
          <Select
            size="xs"
            label={"Tradução"}
            styles={{
              input: {
                width: "60px",
              },
            }}
            value={"PT"}
            data={["PT", "EN"]}
          />
        </Flex>
        <Table withColumnBorders withRowBorders withTableBorder>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Thumbnail</Table.Th>
              <Table.Th>Nome</Table.Th>
              <Table.Th>Pequena descrição</Table.Th>
              <Table.Th>Criado em</Table.Th>
              <Table.Th>Última edição</Table.Th>
              <Table.Th>Ações</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {[...Array(9)].map(() => {
              return (
                <Table.Tr>
                  <Table.Td w={"12%"}>
                    <AspectRatio w={"100%"} ratio={16 / 9}>
                      <Image
                        radius={"0.5rem"}
                        src="https://ninjablock.b-cdn.net/Fiocraft/1.png"
                      />
                    </AspectRatio>
                  </Table.Td>
                  <Table.Td>Fio Cruz</Table.Td>
                  <Table.Td w={"30%"}>
                    <Text
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Projeto desenvolvido com o intuito de reproduzir o campus
                      de manguinhos e seus predios historicos, o projeto foi
                      disponibilizado no estande da fiocruz na EXPO 2020 DUBAI
                      em 2021.
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Text
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      23/06/2023
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Avatar
                      title="Kiddi - 25/06/2023 14:54"
                      src={"https://i.imgur.com/emmGqb9.jpg"}
                    />
                  </Table.Td>

                  <Table.Td>
                    <Flex gap={"1rem"}>
                      <Button color="orange" size="xs">
                        Editar
                      </Button>
                      <Button color="red" size="xs">
                        Remover
                      </Button>
                    </Flex>
                  </Table.Td>
                </Table.Tr>
              );
            })}
          </Table.Tbody>
        </Table>
      </Flex>
    </Container>
  );
};
