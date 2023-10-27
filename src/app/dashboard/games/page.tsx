"use client";
import { Container } from "@mantine/core";
import { useEffect } from "react";
import { useAppProvider } from "../layout";

export default () => {
  const { currentPage, setCurrentPage }: any = useAppProvider();

  useEffect(() => {
    setCurrentPage("games");
  }, []);
  return (
    <Container fluid p={0}>
      Games
    </Container>
  );
};
