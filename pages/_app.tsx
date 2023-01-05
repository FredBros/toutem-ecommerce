import '../styles/globals.css'
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { AppProps } from 'next/app'
import { lightTheme, darkTheme } from "../styles/theme";
import {Layout} from '../src/components/'
import { DataProvider } from "../src/context/DataContext";



export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <DataProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </DataProvider>
      </NextUIProvider>
    </NextThemesProvider>
  );
}
