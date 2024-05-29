'use client'
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';  // Ensure you have the corresponding CSS module for styles
import { useInput } from 'compo/global/context/InputContext';
import { scrollBodyDown, scrollBodyUp } from 'util/scrollBody';

export default function Alfredo() {
    const router = useRouter();
    const { addVoiceRoute, removeVoiceRoute, setRecipeTitle, setRecipeHTML } = useInput();

    const recipeRef = useRef<HTMLDivElement>(null);

    // Sample data for pasta recipes
    const pastaRecipes = [
        { id: '1', name: 'HHEHE Carbonara', description: 'Creamy Italian classic with eggs, cheese, and bacon.' },
    ];

    // Function to handle navigation to the detailed recipe page
    const handleSelectRecipe = (id: string) => {
        router.push(`/recipes/pasta/${id}`);
    }

    // Function to handle navigation back to the call screen page
    const handleCallScreenButton = () => {
        router.push(`/call-screen`);
    }

    const setRecipe = ()=>{
        setRecipeTitle('Fettucicine Alfredo');
        setRecipeHTML(recipeRef.current?.innerHTML || '');
        handleCallScreenButton();
    }

    useEffect(() => {
        // Add voice route for selecting this recipe
        addVoiceRoute('call screen', 'Okay, we are back to the call screen.', handleCallScreenButton, {
            visual: 'Return to Call Screen'
        });
        addVoiceRoute('set recipe', 'Okay, I have set Fettucine Alfredo as the Recipe.', setRecipe, {
            visual: 'Set as Recipe'
        });

        addVoiceRoute('scroll up', 'Okay, I have scrolled up.', scrollBodyUp, {
            visual: 'Scroll Up'
        });

        addVoiceRoute('scroll down', 'Okay, I have scrolled down.', scrollBodyDown, {
            visual: 'Scroll Down'
        });

        return () => {
            // Remove voice route when component is unmounted
            removeVoiceRoute('call screen');
            removeVoiceRoute('set recipe');
removeVoiceRoute('scroll up');
removeVoiceRoute('scroll down');
        }
    }, []);

    return (
        <>
            <main className={styles.main}>
            </main>
            <h1>Fettucicine Alfredo</h1>
            <div ref={recipeRef} className={styles.PastaPage}>
                <div className={styles.Ingredients}>
                    <h2>Ingredients:</h2>
                    <ul>
                        <li>8 oz fettuccine noodles</li>
                        <li>3 oz aged parmesan cheese, finely grated</li>
                        <li>kosher salt, for the pasta water</li>
                        <li>5 tbsp butter</li>
                        <li>1 cup pasta water, reserved after cooking the noodles</li>
                    </ul>
                </div>
                <div className={styles.instructions}>
                    <h2>Instructions:</h2>
                    <ol>
                        <li>
                            <h3>Melt Butter:</h3>
                            In a large pan, melt butter over medium heat until fully melted, then immediately turn off the heat.
                        </li>
                        <li>
                            <h3>Cook Pasta:</h3>
                            In a large pot of salted boiling water, cook your fettuccine to al dente or until desired doneness.
                        </li>
                        <li><h3>Save Pasta Water:</h3>
                            1-2 minutes before the pasta is done, reserve a cup of pasta water and set aside to cool. Ideally, 
                            you want the temperature of this water to be around 150-160F or 70C (use a thermometer for better accuracy).
                        </li>
                        <li>
                            <h3>Combine:</h3>
                            Once the pasta is cooked to your desired doneness, immediately transfer to the butter and add 1/3 cup 
                            pasta water and your cheese. Stir vigorously (still off the heat), adding pasta water as needed, until a creamy sauce is achieved. Adjust seasoning for salt to your preference.
                        </li>
                        <li>
                            <h3>Serve: Immedietly</h3>
                            Serve immediately in a warm bowl with additional parmesan and optional freshly cracked black pepper and enjoy!
                        </li>

                    </ol>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <button onClick={handleCallScreenButton}><strong>Call Screen</strong></button>
            </div>
            <div className={styles.buttonContainer}>
                <button onClick={setRecipe}><strong>Select Recipe</strong></button>
            </div>
        </>
    );
}