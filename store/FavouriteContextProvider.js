import {useState, createContext } from "react"


export const FavouriteContext = createContext({
    ids:[],
    addFavourite:(id)=>{},
    removeFavourite:(id)=>{}
});

function FavouriteContextProvider ({children}){

    const [favouriteMealId , setFavouriteMealId] = useState([]);

    function addFavourite (id){
        setFavouriteMealId((currentId) => [...currentId, id]);
    }

    function removeFavourite(id){
        setFavouriteMealId((currentId) => currentId.filter((mealId) =>
            mealId !== id
        ))
    }

const value = {
    ids : favouriteMealId,
    addFavourite : addFavourite,
    removeFavourite: removeFavourite
}

    return <FavouriteContext.Provider value={value}>
        {children}
    </FavouriteContext.Provider>
}


export default FavouriteContextProvider;