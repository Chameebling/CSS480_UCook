'use client'
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';  // Ensure you have the corresponding CSS module for styles
import { useInput } from 'compo/global/context/InputContext';
import { scrollBodyDown, scrollBodyUp } from 'util/scrollBody';

export default function HoneyMustardChicken() {
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
        setRecipeTitle('Honey Mustard Chicken');
        setRecipeHTML(recipeRef.current?.innerHTML || '');
        handleCallScreenButton();
    }

    useEffect(() => {
        // Add voice route for selecting this recipe
        addVoiceRoute('call screen', 'Okay, we are back to the call screen.', handleCallScreenButton, {
            visual: 'Return to Call Screen'
        });
        addVoiceRoute('set recipe', 'Okay, I have set Garlic Parmesan Chicken as the Recipe.', setRecipe, {
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
            <h1>Honey Mustard Chicken</h1>
            <div ref={recipeRef} className={styles.ChickenPage}>
                <div className={styles.Ingredients}>
                    <h2>Ingredients:</h2>
                    <ul>
                        <li>8 bone-in chicken thighs</li>
                        <li>¼ cup honey</li>
                        <li>¼ cup Dijon mustard</li>
                        <li>2 garlic cloves, minced</li>
                        <li>1 tablespoon extra-virgin olive oil</li>
                        <li>1½ teaspoons finely chopped fresh rosemary</li>
                        <li>1½ teaspoons finely chopped fresh thyme</li>
                        <li>½ teaspoon kosher salt</li>
                        <li>¼ teaspoon freshly ground black pepper</li>
                    </ul>
                </div>
                <div className={styles.instructions}>
                    <h2>Instructions:</h2>
                    <ol>
                        <li>
                            <h3>Preheat the oven:</h3>
                            Preheat the oven to 350°F (177°C). Place the chicken in a baking dish and pat dry with a paper towel.
                        </li>
                        <li>
                            <h3>Prepare the honey mustard mixture:</h3>
                            In a small bowl, stir together the honey, mustard, garlic, oil, rosemary, thyme, salt, and pepper.
                        </li>
                        <li>
                            <h3>Apply the mixture to the chicken:</h3>
                            Brush or spoon the honey mustard mixture liberally on top of the chicken.
                        </li>
                        <li>
                            <h3>Bake the chicken:</h3>
                            Bake for 40 to 45 minutes or until the chicken is fully cooked and registers 175°F (80°C). Turn on the top oven broiler in the last 2 to 3 minutes to crisp up the skin.
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