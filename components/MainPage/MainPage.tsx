import Head from 'next/head'
import css from './style.module.scss'
import Button from "../UI/Button";

export default function MainPage() {
  return (
      <div >
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={css.content}>
            <Button text='add to cart'/>


        </main>


      </div>
  )
}
