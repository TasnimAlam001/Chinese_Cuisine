import React from 'react';
import './FamousRecipes.css'

const FamousRecipes = () => {
  const recipes = [
    { name: 'Kung Pao Chicken', ingredients: ['chicken breast', 'peanuts', 'vegetables', 'soy sauce', 'rice wine vinegar', 'sugar'], image: 'https://www.seriouseats.com/thmb/AaMf6tliWc3jh0R-9KLiJG5fzZo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2014__07__2021-02-12-Take-Out-Kung-Pao-Chicken-MHOM-11-c46f6c06713c45c5a287ddbf08779d04.jpg' },

    { name: 'Mapo Tofu', ingredients: ['tofu', 'ground pork', 'doubanjiang (chili bean paste)', 'Sichuan peppercorns', 'garlic', 'scallions'], image: 'https://i0.wp.com/myvegetarianroots.com/wp-content/uploads/2020/02/DSC_0067-1.jpeg?fit=1920%2C1575&ssl=1' },

    { name: 'Hot and Sour Soup', ingredients: ['dried wood ear mushrooms', 'dried lily buds', 'tofu', 'bamboo shoots', 'pork shoulder', 'chicken broth'], image: 'https://www.pressurecookrecipes.com/wp-content/uploads/2023/02/instant-pot-hot-and-sour-soup.jpg' },

    { name: 'Steamed Pork Dumplings', ingredients: ['ground pork', 'water chestnuts', 'shiitake mushrooms', 'sesame oil', 'soy sauce', 'dumpling wrappers'], image: 'https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/53/77/78/Xxrd8evcRbqsWi4n6fqW_STEAMED_PORK_SCALLION_DUMPLINGS_085.jpg' },

    { name: 'Scallion Pancakes', ingredients: ['flour', 'water', 'salt', 'scallions', 'sesame oil', 'vegetable oil'], image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/7/16/5/scallion-pancake-pajeon-7130252.jpg.rend.hgtvcom.616.462.suffix/1563298863613.jpeg' },

    { name: 'Ma La Xiang Guo', ingredients: ['Sichuan peppercorns', 'dried red chilies', 'garlic', 'ginger', 'ground beef', 'enoki mushrooms'], image: 'https://futuredish.com/wp-content/uploads/2020/06/Mala-Xiang-Guo_FeaturedImage.jpg' },
  ];

  return (
    <div className="recipes-container">
      <h2 className="title">Famous Chinese Cuisine Recipes</h2>
      <ul className="recipes-list">
        {recipes.map((recipe) => (
          <li key={recipe.name} className="recipe-item">
            <h3 className="recipe-name">{recipe.name}</h3>
            <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            <p className="recipe-ingredients p-3"><span className='fw-bold'>Ingredients:</span> {recipe.ingredients.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FamousRecipes;
