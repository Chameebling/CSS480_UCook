'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './_Header.module.scss';

export default function Header(){

    const pathname = usePathname();

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>

            </nav>
        </header>
    )
}