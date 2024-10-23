import { useEffect, useState } from "react";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
   

    useEffect(() => {
        fetch('./food.json')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, []);

    return (
        <div className="md:w-2/3">
            <div className="grid lg:grid-cols-2 gap-6">
            {
                recipes.map((recipe) => (

                    <div key={recipe.recipe_id} className="card bg-base-100 w-96 shadow-xl">


  <figure className="px-8 pt-6">
    <img className="md:h-56 rounded-xl w-full"
      src={recipe.recipe_image}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-lg text-gray-800 font-medium">{recipe.recipe_name}</h2>
    <p className="text-gray-500">{recipe.short_description}</p>
    <h3>Ingredients: {recipes.ingredients.length}</h3>

    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>


               
                ))
            }

            </div>
           
        </div>
    );
};

export default Recipes;
