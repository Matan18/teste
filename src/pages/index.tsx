import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { GetServerSideProps } from 'next'

const inter = Inter({ subsets: ['latin'] })

type Props ={
  ip: string;
}

export default function Home({ ip } : Props) {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <h3>Seu Ip: {ip}</h3>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const ip = (ctx.req.headers['x-real-ip'] || '').toString();
  return {
    props:{ ip }
  }
}