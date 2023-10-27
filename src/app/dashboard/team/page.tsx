"use client";

import { Container } from "@mantine/core";
import { useAppProvider } from "../layout";
import { useEffect } from "react";

export default () => {
  const { currentPage, setCurrentPage }: any = useAppProvider();

  useEffect(() => {
    setCurrentPage("team");
  }, []);

  return (
    <Container fluid p={0}>
      Equipe
    </Container>
  );
};
