import React, { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Navbar.module.css'

interface Props {
  text: string, 
  href: string
}

export const ActiveLink : FC<Props> = ({text, href}) => {

    const router = useRouter();
    const currentPath = router.asPath;

  
  return (
    <Link href={href}>
        <a className={ currentPath == href ?  styles.activeLink : styles.link}>
            {text}
        </a>
    </Link>
  )
}
