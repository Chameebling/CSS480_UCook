'use client'
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';  // Ensure you have the corresponding CSS module for styles
import { useInput } from 'compo/global/context/InputContext';
import { scrollBodyDown, scrollBodyUp } from 'util/scrollBody';

export default function MinestroneSoup() {
    const router = useRouter();
    const {addVoiceRoute, removeVoiceRoute, setRecipeTitle, setRecipeHTML} = useInput();

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
        setRecipeTitle('Minestrone Soup');
        setRecipeHTML(recipeRef.current?.innerHTML || '');
        handleCallScreenButton();
    }

    useEffect(() => {
        // Add voice route for selecting this recipe
        addVoiceRoute('call screen', 'Okay, we are back to the call screen.', handleCallScreenButton, {
            visual: 'Return to Call Screen'
        });
        addVoiceRoute('set recipe', 'Okay, I have set Minestrone Soup as the Recipe.', setRecipe, {
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
            <h1>Minestrone Soup</h1>
            <div ref={recipeRef} className={styles.SoupsPage}>
                <div className={styles.Ingredients}>
                    <h2>Ingredients:</h2>
                    <ul>
                        <li>2 tablespoons extra-virgin olive oil</li>
                        <li>1 medium yellow onion, diced</li>
                        <li>2 medium carrots, chopped</li>
                        <li>2 celery ribs, thinly sliced</li>
                        <li>1 teaspoon sea salt, plus more to taste</li>
                        <li>Freshly ground black pepper</li>
                        <li>3 garlic cloves, grated</li>
                        <li>1 (28-ounce) can diced tomatoes</li>
                        <li>1½ cups cooked white beans or kidney beans, drained and rinsed</li>
                        <li>1 cup chopped green beans</li>
                        <li>4 cups vegetable broth</li>
                        <li>2 bay leaves</li>
                        <li>1 teaspoon dried oregano</li>
                        <li>1 teaspoon dried thyme</li>
                        <li>¾ cup small pasta, elbows, shells, orecchiette</li>
                        <li>½ cup chopped fresh parsley</li>
                        <li>Red pepper flakes</li>
                        <li>Grated Parmesan cheese, optional, for serving</li>
                    </ul>
                </div>
                <div className={styles.instructions}>
                    <h2>Instructions:</h2>
                    <ol>
                        <li>
                            <h3>Heat the oil:</h3>
                            Heat the oil in a large pot over medium heat. Add the onion, carrots, celery, salt, and several grinds of black pepper, and cook, stirring occasionally, for 8 minutes, until the vegetables begin to soften.
                        </li>
                        <li>
                            <h3>Add remaining ingredients:</h3>
                            Add the garlic, tomatoes, beans, green beans, broth, bay leaves, oregano, and thyme. Cover and simmer for 20 minutes.
                        </li>
                        <li>
                            <h3>Cook the pasta:</h3>
                            Stir in the pasta and cook, uncovered, for 10 more minutes, until the pasta is cooked through.
                        </li>
                        <li>
                            <h3>Season and serve:</h3>
                            Season to taste and serve with parsley, red pepper flakes, and parmesan, if desired.
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