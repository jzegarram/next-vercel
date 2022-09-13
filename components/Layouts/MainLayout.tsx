import React, { FC } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from './MainLayout.module.css'
import { Navbar } from '../Navbar'


type Props = {
  children?: React.ReactNode;
  title: string,
  descriptionContent: string,
}

export const MainLayout: FC<Props> = ({
    children,
    title,
    descriptionContent
}) => {
  return (
    <div className={styles.container}>
    <Head>
      <title>{title}</title>
      <meta name="description" content={descriptionContent} />
      <link rel="icon" href="/favicon.ico" />
    </Head>

      <Navbar />

    <main className={styles.main}>
        {children}
    </main>

    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  </div>
  )
}
