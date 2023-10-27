"use client";
import { Container } from "@mantine/core";
import { useEffect } from "react";
import { useAppProvider } from "../layout";

export default () => {
  const { currentPage, setCurrentPage }: any = useAppProvider();

  useEffect(() => {
    setCurrentPage("background");
  }, []);
  return (
    <Container fluid p={0}>
      Video Background
    </Container>
  );
};
