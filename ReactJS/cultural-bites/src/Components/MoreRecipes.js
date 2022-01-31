import React, {useState} from 'react';
import RecipeDetails from './RecipeDetails';

function MoreRecipes({recipe}) {
  const [show, setShow] = useState(false)

  const {label, image, url, ingredients} = recipe.recipe;
  return( 
    <div className="moreRecipes">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url}>Source </a>
      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <RecipeDetails ingredients={ingredients}/>}
    </div>
  )
}

export default MoreRecipes;
