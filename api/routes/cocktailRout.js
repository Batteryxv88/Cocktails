const express =  require('express')
const router = express.Router()
const Cocktail = require('../models/cocktailModels')

// const vvvv = CocktalesArr = {
//     name: string;
//     id: string;
//     season: string;
//     src: string;
//     src_sqv: string;
//     class: string;
//     description: string;
//     ingredients: Ing[];
//     comment: CommentType[]
//   };

router.route("/create").post((req, res) => {
    const name = req.body.name;
    const id = req.body.id;
    const season = req.body.season;
    const src = req.body.src;
    const src_sqv = req.body.src_sqv;
    const clas = req.body.class;
    const description = req.body.description;
    const ingredients = req.body.ingredients;
    const comment = req.body.comment;

    const newCocktail = new Cocktail({
        name,
        id,
        season,
        src,
        src_sqv,
        clas,
        description,
        ingredients,
        comment
    })

    newCocktail.save()

})

router.route("/cocktails").get((req, res) => {
    Cocktail.find()
    .then(foundCocktails => res.json(foundCocktails))
})

module.exports = router;