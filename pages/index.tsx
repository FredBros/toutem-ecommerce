import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Text } from "@nextui-org/react";
import { HomePage} from "../src/components"


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Text h1>Hello World !!</Text>
        <p>Hello ici aussi !!</p>
        <HomePage/>
      </main>
    </>
  );
}
