"use client";
import {
  Container,
  Table,
  Image,
  AspectRatio,
  Button,
  Flex,
  Title,
} from "@mantine/core";
import { useEffect } from "react";
import { useAppProvider } from "../layout";

export default () => {
  const { currentPage, setCurrentPage }: any = useAppProvider();

  useEffect(() => {
    setCurrentPage("partners");
  }, []);
  return (
    <Container fluid p={0}>
      <Flex direction={"column"} gap={"1rem"}>
        <Flex gap={"1rem"}>
          <Title fz={"1.2rem"} fw={600} style={{ color: "#00000080" }}>
            Lista de parceiros
          </Title>
          <Button color="orange" size="xs">
            Adicionar Parceiro
          </Button>
        </Flex>
        <Table withColumnBorders withRowBorders withTableBorder>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Logo</Table.Th>
              <Table.Th>Nome</Table.Th>
              <Table.Th>Ações</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {[...Array(10)].map(() => (
              <Table.Tr>
                <Table.Td w={"5rem"}>
                  <AspectRatio w={"100%"} ratio={10 / 10}>
                    <Image
                      width={"100%"}
                      height={"100%"}
                      fit="contain"
                      src="https://www.ninjablock.gg/logo/pixowl-black.png"
                    />
                  </AspectRatio>
                </Table.Td>
                <Table.Td>Pixowl</Table.Td>
                <Table.Td w={"20%"}>
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
            ))}
          </Table.Tbody>
        </Table>
      </Flex>
    </Container>
  );
};
