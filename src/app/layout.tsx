import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import type { Metadata } from "next";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";

export const metadata: Metadata = {
  title: "Dashboard Ninja Block",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}