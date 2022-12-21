import '../styles/globals.css'
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from 'next/app'
import {theme} from "../styles/theme"



export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={theme}>
        <Component {...pageProps} />
    </NextUIProvider>
  );
}
