import '../styles/globals.css'
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { AppProps } from 'next/app'
import { lightTheme, darkTheme } from "../styles/theme";
import {Layout} from '../src/components/'
import { DataProvider } from "../src/context/DataContext";
import { DataShopProvider } from "../src/context/ShopContext";
import { SSRProvider } from "@react-aria/ssr"; 



export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <DataShopProvider>
            <DataProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </DataProvider>
          </DataShopProvider>
        </NextUIProvider>
      </NextThemesProvider>
    </SSRProvider>
  );
}
