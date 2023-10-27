"use client";
yarn run dev

import { Container } from "@mantine/core";
import { useAppProvider } from "../layout";
import { useEffect } from "react";

export default () => {
  const { currentPage, setCurrentPage }: any = useAppProvider();

  useEffect(() => {
    setCurrentPage("projects");
  }, []);

  return (
    <Container fluid p={0}>
      Projetos
    </Container>
  );
};
