'use client'
import React from 'react';
import Image from "next/image";
import styles from "./page.module.scss";
import { useInput } from 'compo/global/context/InputContext';
import { useRouter } from "next/navigation";

export default function CategoriesPage() {
    const router = useRouter();

    const handleNavigate = (category: string) => {
        router.push(`/recipes/${category}`);
    }
    return (
        <div className={styles.CategoriesPage}>
            <h1>Please choose a recipe category:</h1>
            <ul>
                <li className="horizontal-list">
                    <button className="button" onClick={() => handleNavigate('pasta')}>
                        <img src="" alt="Pasta" />
                        <span className="button-text">Pastas</span>
                    </button>
                </li>
                <li className="horizontal-list">
                    <button className="button" onClick={() => handleNavigate('sandwiches')}>
                        <img src="" alt="Sandwiches" />
                        <span className="button-text">Sandwiches</span>
                    </button>
                </li>
                <li className="horizontal-list">
                    <button className="button" onClick={() => handleNavigate('soups')}>
                        <img src="" alt="Soups" />
                        <span className="button-text">Soups</span>
                    </button>
                </li>
                <li className="horizontal-list">
                    <button className="button" onClick={() => handleNavigate('chicken')}>
                        <img src="" alt="Chicken" />
                        <span className="button-text">Chicken</span>
                    </button>
                </li>
            </ul>
            <button type="submit"><strong>Continue</strong></button>
        </div>
    );
}