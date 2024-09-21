import React from 'react';
import "./HomePage.scss";
import {useMealContext} from '../../context/mealContext';
import Loader from "../../components/Loader/Loader";
import CategoryList from "../../components/Category/CategoryList"


const HomePage = () => {
      const{categories, meals, categoryLoading, mealsLoading} = useMealContext();
      console.log(categories, meals, categoryLoading, mealsLoading);
   
  return (
 <main className='main-content'>
          {
            (categoryLoading) ? <Loader /> : <CategoryList categories={categories} />
          }
 </main>
  )
}

export default HomePage