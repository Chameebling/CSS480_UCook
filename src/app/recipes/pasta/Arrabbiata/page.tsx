'use client'
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';  // Ensure you have the corresponding CSS module for styles
import { useInput } from 'compo/global/context/InputContext';
import { scrollBodyDown, scrollBodyUp } from 'util/scrollBody';

export default function Arrabbiata() {
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
        setRecipeTitle('Penne Arrabbiata');
        setRecipeHTML(recipeRef.current?.innerHTML || '');
        handleCallScreenButton();
    }

    useEffect(() => {
        // Add voice route for selecting this recipe
        addVoiceRoute('call screen', 'Okay, we are back to the call screen.', handleCallScreenButton, {
            visual: 'Return to Call Screen'
        });
        addVoiceRoute('set recipe', 'Okay, I have set Penne Arrabbiata as the Recipe.', setRecipe, {
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
            <h1>Penne Arrabbiata</h1>
            <div ref={recipeRef} className={styles.PastaPage}>
                <div className={styles.Ingredients}>
                    <h2>Ingredients:</h2>
                    <ul>
                        <li>1 pound penne rigate</li>
                        <li>3 Tablespoons olive oil</li>
                        <li>3 cloves garlic</li>
                        <li>1/4 teaspoon crushed red pepper flakes , depending on how spicy you want it</li>
                        <li>1 28 ounce can whole peeled tomatoes (or 1 ½ cups fresh chopped tomatoes)</li>
                        <li>2 Tablespoons tomato paste</li>
                        <li>6 fresh basil leaves , chopped</li>
                        <li>1/2 cup freshly grated parmesan cheese (or pecorino cheese), for topping</li>
                        <li>1/3 cup fresh chopped parsley (finely chopped), for topping</li>
                    </ul>
                </div>
                <div className={styles.instructions}>
                    <h2>Instructions:</h2>
                    <ol>
                        <li>
                            <h3>Cook the pasta:</h3>
                            Cook pasta in a large pot of boiling water, according to package instructions, until tender.
                        </li>
                        <li>
                            <h3>Sauté garlic and red pepper:</h3>
                            Meanwhile, heat olive oil in a large skillet over medium heat. Add garlic and crushed red pepper; cook, stirring for 30 seconds.
                        </li>
                        <li><h3></h3>
                            Add tomatoes, crushing them roughly with the back of a wooden spoon, and tomato paste.
                        </li>
                        <li>
                            <h3>Simmer Suace:</h3>
                            Bring to a simmer over low heat and cook for 5-10 minutes. Remove from heat and add fresh chopped basil.
                        </li>
                        <li>
                            <h3>Mix Pasta and Sauce:</h3>
                            When pasta is cooked, drain the water and add it to the sauce. Toss well. Taste and add more red pepper flakes or salt and pepper, if needed.
                        </li>
                        
                        <li><h3>Serve</h3>Serve immediately topped with a generous portion of grated pecorino or parmesan cheese and fresh chopped parsley.</li>
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