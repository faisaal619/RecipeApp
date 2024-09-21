import React, {createContext, useContext, useEffect, useReducer} from "react";
import { mealReducer} from "../reducers/mealReducer";
import { startFetchCategrioes } from "../actions/mealActions";

const initialState = {
    categories : [],
    categoryLoading: false,
    categoryError: false,
    categoryMeals :[],
    categoryMealsLoading: false,
    categoryMealsError: false,
     meals: [],
     mealsLoading : false,
     mealsError : false,
     meal : [],
     mealLoading : false,
     mealError: false
}

const MealContext = createContext({});
export const MealProvider = ({children}) => {
     const [state, dispatch] = useReducer(mealReducer, initialState);

     useEffect (() => {
           startFetchCategrioes(dispatch);
     }, [])
     
     return (
        <MealContext.Provider value= {{
           ...state,
           dispatch,
           startFetchCategrioes
        }}>
            {children}
        </MealContext.Provider>
     )
     
}

export const  useMealContext = () => {
    return useContext(MealContext);
}