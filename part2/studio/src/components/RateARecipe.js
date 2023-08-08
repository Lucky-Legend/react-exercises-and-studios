let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function GiveRating(props) {
  return <h3>{stars[props.rating - 1]}</h3>;
}

function RateARecipe(props) {
  return props.rating > 0 && props.rating < 6 ? GiveRating(props) : null;
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
