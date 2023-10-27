"use client";
import { AppShell, Box, Burger, Flex, Image, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBook,
  IconBuildingSkyscraper,
  IconDeviceGamepad,
  IconHeartHandshake,
  IconHome2,
  IconMovie,
  IconUsersGroup,
} from "@tabler/icons-react";
import { createContext, useContext, useState } from "react";

const AppProvider = createContext({});

export default ({ children }: { children: React.ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<string | null>(null);

  return (
    <AppProvider.Provider value={{ currentPage, setCurrentPage }}>
      <AppShell
        header={{ height: "80px" }}
        navbar={{ width: 300, breakpoint: "sm" }}
        padding="md"
      >
        <AppShell.Header p={"15px"}>
          <Flex align={"center"} w={"100%"} h={"100%"}>
            <Box w={"5rem"}>
              <Image src={"/logotipo.svg"} />
            </Box>
          </Flex>
        </AppShell.Header>
        <AppShell.Navbar p="15px">
          <Flex direction={"column"}>
            {pages.map((page) => {
              return (
                <NavLink
                  color="orange"
                  href={page.url}
                  active={currentPage === page.value ? true : false}
                  label={page.label}
                  leftSection={page.icon}
                />
              );
            })}
          </Flex>
        </AppShell.Navbar>

        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </AppProvider.Provider>
  );
};

export const useAppProvider = () => useContext(AppProvider);

const pages = [
  {
    url: "/dashboard/",
    value: "dashboard",
    label: "Dashboard",
    icon: <IconHome2 size={"1rem"} stroke={"0.1rem"} />,
  },
  {
    url: "/dashboard/partners",
    value: "partners",
    label: "Parceiros",
    icon: <IconHeartHandshake size={"1rem"} stroke={"0.1rem"} />,
  },
  {
    url: "/dashboard/projects",
    value: "projects",
    label: "Projetos",
    icon: <IconBook size={"1rem"} stroke={"0.1rem"} />,
  },
  {
    url: "/dashboard/games",
    value: "games",
    label: "Games",
    icon: <IconDeviceGamepad size={"1rem"} stroke={"0.1rem"} />,
  },
  {
    url: "/dashboard/aboutus",
    value: "aboutus",
    label: "Sobre nós",
    icon: <IconBuildingSkyscraper size={"1rem"} stroke={"0.1rem"} />,
  },
  {
    url: "/dashboard/team",
    value: "team",
    label: "Equipe",
    icon: <IconUsersGroup size={"1rem"} stroke={"0.1rem"} />,
  },
  {
    url: "/dashboard/background",
    value: "background",
    label: "Video Background",
    icon: <IconMovie size={"1rem"} stroke={"0.1rem"} />,
  },
  {
    url: "/dashboard/language",
    value: "language",
    label: "Linguagens",
    icon: <IconMovie size={"1rem"} stroke={"0.1rem"} />,
  },
];
