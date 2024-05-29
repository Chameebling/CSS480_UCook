export const scrollBodyUp = () => {
    const recipeContainer = document.querySelector(`body`);
    console.log(recipeContainer);
    if(recipeContainer){
        recipeContainer.scrollTop -= window.innerHeight * 0.75;
        if(recipeContainer.scrollTop < 0) recipeContainer.scrollTop = 0;
    }
}

export const scrollBodyDown = () => {
    const recipeContainer = document.querySelector(`body`);
    if(recipeContainer){
        recipeContainer.scrollTop += window.innerHeight * 0.75;
        if(recipeContainer.scrollTop > recipeContainer.scrollHeight) recipeContainer.scrollTop = recipeContainer.scrollHeight;
    }
}