import Head from 'next/head'
import MainPage from "../components/MainPage";

export default function Home() {
  return (
      <div >
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>

        <MainPage />
        </main>

      </div>
  )
}
