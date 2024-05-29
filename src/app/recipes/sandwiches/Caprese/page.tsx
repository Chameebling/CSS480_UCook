'use client'
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';  // Ensure you have the corresponding CSS module for styles
import { useInput } from 'compo/global/context/InputContext';
import { scrollBodyDown, scrollBodyUp } from 'util/scrollBody';

export default function Caprese() {
    const router = useRouter();
    const {addVoiceRoute, removeVoiceRoute, setRecipeTitle, setRecipeHTML} = useInput();

    const recipeRef = useRef<HTMLDivElement>(null);

    // Function to handle navigation back to the call screen page
    const handleCallScreenButton = () => {
        router.push(`/call-screen`);
    }

    const setRecipe = ()=>{
        setRecipeTitle('Caprese Sandwich');
        setRecipeHTML(recipeRef.current?.innerHTML || '');
        handleCallScreenButton();
    }

    useEffect(() => {
        // Add voice route for selecting this recipe
        addVoiceRoute('call screen', 'Okay, we are back to the call screen.', handleCallScreenButton, {
            visual: 'Return to Call Screen'
        });
        addVoiceRoute('set recipe', 'Okay, I have set Caprese Sandwich as the Recipe.', setRecipe, {
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
            <h1>Caprese Sandwich</h1>
            <div className={styles.PastaPage}>
                <div className={styles.Ingredients}>
                    <h2>Ingredients:</h2>
                    <ul>
                        <li>Bread, (we prefer sourdough)</li>
                        <li>Fresh Mozzarella, sliced</li>
                        <li>Roma Tomatoes, sliced</li>
                        <li>Arugula</li>
                        <li>Basil</li>
                        <li>Pesto </li>
                        <li>Butter</li>
                        <li>1 Cup Balsamic Vinegar</li>
                        <li>1 teaspoon Honey, (or sugar)</li>
                    </ul>
                </div>
                <div className={styles.instructions}>
                    <h2>Instructions:</h2>
                    <ol>
                        <li>
                            <h3>Make the Balsamic Glaze:</h3>
                            Bring the vinegar and honey to a simmer in a small pot over medium heat until reduced by 1/2.
                            Do not boil, turn to medium low if needed.
                            Set aside to cool. 1 Cup Balsamic Vinegar,1 teaspoon Honey

                        </li>
                        <li>
                            <h3>Prepare Pesto:</h3>
                            Prepare the pesto per recipe instructions.
                        </li>
                        <li>
                            <h3>Assemble:</h3>
                            Spread pesto on both pieces of bread. Place arugula, basil, tomatoes, mozzarella
                            and a sprinkle of salt and pepper. Drizzle a little balsamic glaze and top with
                            the other piece of bread. Bread,Fresh Mozzarella,Roma Tomatoes,Arugula,Pesto ,Basil
                        </li>
                        <li>
                            <h3>Grill:</h3>
                            Heat a panini grill or grill pan and butter the outside of the sandwich.
                            Grill until golden and serve. Butter
                        </li>
                        <li><h3>Serve</h3></li>

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