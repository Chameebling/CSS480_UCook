'use client'
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';  // Ensure you have the corresponding CSS module for styles
import { useInput } from 'compo/global/context/InputContext';
import { scrollBodyDown, scrollBodyUp } from 'util/scrollBody';

export default function LemonHerbChicken() {
    const router = useRouter();
    const { addVoiceRoute, removeVoiceRoute, setRecipeTitle, setRecipeHTML } = useInput();

    const recipeRef = useRef<HTMLDivElement>(null);

    // Function to handle navigation to the detailed recipe page
    const handleSelectRecipe = (id: string) => {
        router.push(`/recipes/pasta/${id}`);
    }

    // Function to handle navigation back to the call screen page
    const handleCallScreenButton = () => {
        router.push(`/call-screen`);
    }

    const setRecipe = ()=>{
        setRecipeTitle('Lemon Herb Chicken');
        setRecipeHTML(recipeRef.current?.innerHTML || '');
        handleCallScreenButton();
    }

    useEffect(() => {
        // Add voice route for selecting this recipe
        addVoiceRoute('call screen', 'Okay, we are back to the call screen.', handleCallScreenButton, {
            visual: 'Return to Call Screen'
        });
        addVoiceRoute('set recipe', 'Okay, I have set Lemon Herb Chicken as the Recipe.', setRecipe, {
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
            <h1>Lemon Herb Chicken</h1>
            <div ref={recipeRef} className={styles.ChickenPage}>
                <div className={styles.Ingredients}>
                    <h2>Ingredients:</h2>
                    <ul>
                        <li>2 lbs boneless, skinless chicken thighs</li>
                        <li>2 Tbsp olive oil</li>
                        <li>Juice of 2 lemons</li>
                        <li>2 tsp lemon zest</li>
                        <li>4 cloves garlic, minced</li>
                        <li>2 Tbsp fresh thyme and fresh rosemary</li>
                        <li>Salt and black pepper, to taste</li>
                    </ul>
                </div>
                <div className={styles.instructions}>
                    <h2>Instructions:</h2>
                    <ol>
                        <li>
                            <h3>Make the marinade:</h3>
                            In a small bowl or jar, whisk together the olive oil, lemon juice, garlic, fresh herbs, salt, and pepper until combined.
                        </li>
                        <li>
                            <h3>Prepare the chicken:</h3>
                            <ul>
                                <li>Place chicken in a shallow dish or a 1-gallon sealable plastic bag and pour most of the lemon herb sauce over the chicken (reserve a little bit of the sauce to brush on the chicken later while grilling).</li>
                                <li>Place chicken in the fridge and let it marinate for at least 30 minutes, but no longer than 2 hours. When ready to grill, remove chicken from the dish or bag, shake off any excess, and discard leftover marinade.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Grill the chicken:</h3>
                            Heat a grill or grill pan on medium heat and brush grill with oil to prevent sticking. Grill the chicken for 5 to 6 minutes on each side or until cooked through and no longer pink (internal temp should be 165 degrees). Remove chicken from grill and let it rest for 5 minutes before serving.
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