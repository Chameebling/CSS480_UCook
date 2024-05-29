'use client'
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';  // Ensure you have the corresponding CSS module for styles
import { useInput } from 'compo/global/context/InputContext';
import { scrollBodyDown, scrollBodyUp } from 'util/scrollBody';

export default function Carbonara() {
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
        setRecipeTitle('Spaghetti Carbonara');
        setRecipeHTML(recipeRef.current?.innerHTML || '');
        handleCallScreenButton();
    }

    useEffect(() => {
        // Add voice route for selecting this recipe
        addVoiceRoute('call screen', 'Okay, we are back to the call screen.', handleCallScreenButton, {
            visual: 'Return to Call Screen'
        });
        addVoiceRoute('set recipe', 'Okay, I have set Spaghetti Carbonara as the Recipe.', setRecipe, {
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
            <div ref={recipeRef} className={styles.PastaPage}>
                <h1>Spaghetti Carbonara</h1>
                <div className={styles.Ingredients}>
                    <h2>Ingredients:</h2>
                    <ul>
                        <li>1 tablespoon extra virgin olive oil or unsalted butter</li>
                        <li>1/2 pound pancetta or thick cut bacon, diced</li>
                        <li>1 to 2 garlic cloves, minced, about 1 teaspoon (optional)</li>
                        <li>3 to 4 whole eggs</li>
                        <li>1 cup grated Parmesan or pecorino cheese</li>
                        <li>1 pound spaghetti (or bucatini or fettuccine)</li>
                        <li>Kosher salt and freshly ground black pepper to taste</li>
                    </ul>
                </div>
                <div className={styles.instructions}>
                    <h2>Instructions:</h2>
                    <ol>
                        <li>
                            <h3>Heat the pasta water:</h3> Put a large pot of salted water on to boil (1 tablespoon salt for every 2 quarts of water.)
                        </li>
                        <li><h3>Sauté the pancetta or bacon and garlic:</h3>
                            While the water is coming to a boil, heat the olive oil or butter in a large sauté pan over medium heat. Add the bacon or pancetta and cook slowly until crispy.

                            Add the garlic (if using) and cook another minute, then turn off the heat and put the pancetta and garlic into a large bowl.</li>
                        <li><h3>Beat the eggs and half of the cheese:</h3>
                            In a small bowl, beat the eggs and mix in about half of the cheese.</li>
                        <li><h3>Cook the pasta:</h3>
                            Once the water has reached a rolling boil, add the dry pasta, and cook, uncovered, at a rolling boil.</li>
                        <li><h3>Toss the pasta with pancetta or bacon:</h3>
                            When the pasta is al dente (still a little firm, not mushy), use tongs to move it to the bowl with the bacon and garlic. Let it be dripping wet. Reserve some of the pasta water.

                            Move the pasta from the pot to the bowl quickly, as you want the pasta to be hot. It&apos;s the heat of the pasta that will heat the eggs sufficiently to create a creamy sauce.

                            Toss everything to combine, allowing the pasta to cool just enough so that it doesn&apos;t make the eggs curdle when you mix them in. (That&apos;s the tricky part.)</li>
                        <li><h3>Add the beaten egg mixture:</h3>
                            Add the beaten eggs with cheese and toss quickly to combine once more. Add salt to taste. Add some pasta water back to the pasta to keep it from drying out.</li>
                        <li><h3>Serve:</h3>Serve at once with the rest of the parmesan and freshly ground black pepper. If you want, sprinkle with a little fresh chopped parsley.</li>
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