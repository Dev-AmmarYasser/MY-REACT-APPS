import axios from "axios";
import { useState, useEffect } from "react";

export const Home = () => {
  const [meals, setMeals] = useState([]);

  const findMeal = () => {};

  useEffect(() => {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
      )
      .then((res) => setMeals(res.data))
      .catch((err) => console.log(err));
  }, []);

  // findMeal();

  // console.log(meals.meals[0].strMealThumb);
  return (
    <div className="container mx-auto flex flex-col gap-6">
      <div className=" mt-[50px]  flex-col md:flex-row flex py-6 gap-6  ">
        <div className=" flex-1 flex flex-col justify-center">
          <h2 className=" text-5xl text-center md:text-start md:text-8xl font-bold mb-6 leading-[75px] md:leading-[120px]">
            What are we about
          </h2>
          <p className=" text-gray-600 text-center md:text-start mx-4 md:mx-0 leading-[60px] mb-2 text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A quidem
            eligendi laboriosam omnis aperiam pariatur soluta sit, vero tenetur
            magnam ab inventore repellendus eos nihil nobis nulla sint, vitae
            in?
          </p>
          <button className="uppercase py-5 block w-[300px] mx-auto md:mx-0 px-6 mt-4 text-2xl hover:bg-rose-700 transition duration-200 rounded-lg font-semibold text-white bg-rose-600 ">
            explore now
          </button>
        </div>
        <div className="flex-1 grid  grid-cols-3 mx-4 mt-6 md:mt-0 md:mx-0 grid-rows-3 gap-2">
          {meals.length !== 0
            ? meals.meals.map((meal) => (
                <img
                  className="rounded-lg "
                  src={meal.strMealThumb}
                  key={meal.idMeal}
                  alt=""
                />
              ))
            : ""}
        </div>
      </div>
      <div className="flex  gap-6 flex-col lg:flex-row px-4 md:px-0 ">
        <div className="flex-1">
          {meals.length !== 0 && (
            <img
              className="rounded-lg flex-1 md:mx-auto w-[100%]"
              src={meals.meals[0].strMealThumb}
              alt=""
            />
          )}
        </div>
        <div className="flex-1 my-auto ">
          <div className=" flex-1 flex my-auto flex-col justify-center">
            <h2 className=" text-7xl text-center lg:text-start  font-bold mb-4 leading-[75px] lg:leading-[120px]">
              Improve your culinary skills
            </h2>
            <ul className="text-2xl">
              <li className="p-2 bg-gray-100 my-2 font-semibold   border-l-4 border-rose-500">
                Learn new recipes
              </li>
              <li className="p-2 bg-gray-100 my-2 font-semibold   border-l-4 border-rose-500">
                Experiment with food
              </li>
              <li className="p-2 bg-gray-100 my-2 font-semibold   border-l-4 border-rose-500">
                Write your own recipes
              </li>
              <li className="p-2 bg-gray-100 my-2 font-semibold   border-l-4 border-rose-500">
                Know nutrition facts
              </li>
              <li className="p-2 bg-gray-100 my-2 font-semibold   border-l-4 border-rose-500">
                Get cooking tips
              </li>
              <li className="p-2 bg-gray-100 my-2 font-semibold   border-l-4 border-rose-500">
                Get ranked
              </li>
            </ul>
            <button className="uppercase py-5 block w-[300px] mx-auto  lg:mx-0 px-6 mt-6 text-2xl hover:bg-rose-700 transition duration-200 rounded-lg font-semibold text-white bg-rose-600 ">
              signup now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
