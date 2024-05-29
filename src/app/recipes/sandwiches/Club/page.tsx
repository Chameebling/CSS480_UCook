'use client'
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';  // Ensure you have the corresponding CSS module for styles
import { useInput } from 'compo/global/context/InputContext';
import { scrollBodyDown, scrollBodyUp } from 'util/scrollBody';

export default function Club() {
    const router = useRouter();
    const {addVoiceRoute, removeVoiceRoute, setRecipeTitle, setRecipeHTML} = useInput();

    const recipeRef = useRef<HTMLDivElement>(null);

    // Function to handle navigation back to the call screen page
    const handleCallScreenButton = () => {
        router.push(`/call-screen`);
    }

    const setRecipe = ()=>{
        setRecipeTitle('Club Sandwich');
        setRecipeHTML(recipeRef.current?.innerHTML || '');
        handleCallScreenButton();
    }

    useEffect(() => {
        // Add voice route for selecting this recipe
        addVoiceRoute('call screen', 'Okay, we are back to the call screen.', handleCallScreenButton, {
            visual: 'Return to Call Screen'
        });
        addVoiceRoute('set recipe', 'Okay, I have set Club Sandwich as the Recipe.', setRecipe, {
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
            <h1>Club Sandwich</h1>
            <div ref={recipeRef} className={styles.PastaPage}>
                <div className={styles.Ingredients}>
                    <h2>Ingredients:</h2>
                    <ul>
                        <li>3 pieces sliced bread</li>
                        <li>Butter, softened</li>
                        <li>3 Tbsp. mayonnaise</li>
                        <li>Romaine</li>
                        <li>2 tomato slices</li>
                        <li>Kosher salt </li>
                        <li>Freshly ground black pepper</li>
                        <li>2 pieces bacon, cooked</li>
                        <li>1 thick slice cheddar </li>
                        <li>2 slices turkey</li>
                        <li>2 slices ham</li>
                    </ul>
                </div>
                <div className={styles.instructions}>
                    <h2>Instructions:</h2>
                    <ol>
                        <li>
                            <h3>Toast Bread:</h3>
                            Toast bread until golden, then spread a thin layer of butter on both sides of every slice.
                        </li>
                        <li>
                            <h3>Prepate First Slice:</h3>
                            Spread mayonnaise on one side of one slice of bread.
                            Top with lettuce and tomato slices, then season lightly with salt and pepper.
                            Place bacon slices on top.
                        </li>
                        <li><h3>Prepare Second and Third Slice:</h3>
                            Spread mayonnaise on both sides of a second piece of bread and place on top of bacon.
                            Top with cheddar, turkey, and ham. Spread mayonnaise on one side of the last piece of
                            bread and place on top of sandwich, mayo side down.
                        </li>
                        <li>
                            <h3>Serve:</h3>
                            Secure with toothpicks and cut into 4 triangles.
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