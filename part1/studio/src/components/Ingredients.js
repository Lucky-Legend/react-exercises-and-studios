import styles from './Ingredients.module.css';

let ingredients = ["2 large onions , halved" , "150g / 5oz ginger , sliced down the centre", "10 star anise", "4 cinnamon quills", "4 cardamon pods"];

const RecipeIngredients = () => {
    return (
        <div>
        <h3>Recipe Ingredients</h3>
        <ul className = {styles.ingredientList}>
           <li>{ingredients[0]}</li>
           <li>{ingredients[1]}</li>
           <li>{ingredients[2]}</li>
           <li>{ingredients[3]}</li>
           <li>{ingredients[4]}</li>
        </ul>
     </div>
    )
}

export default RecipeIngredients;