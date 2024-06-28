import { useMemo } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./style.module.scss";
import data from "../../utils/data";
import Ingredient from "../ingredient";

const Ingredients = () => {
  const buns = useMemo(() => data.filter((item) => item.type === "bun"), []);
  const mains = useMemo(() => data.filter((item) => item.type === "main"), []);
  const sauces = useMemo(
    () => data.filter((item) => item.type === "sauce"),
    []
  );

  return (
    <div className="ingredients pt-10">
      <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>
      <div className={`${styles.tabs} mb-10`}>
        <Tab onClick={() => {}} active value="bun">
          Булки
        </Tab>
        <Tab onClick={() => {}} active value="sauce">
          Соусы
        </Tab>
        <Tab onClick={() => {}} active value="main">
          Начинки
        </Tab>
      </div>

      <div className={`${styles.body} ingredients__body mb-4`}>
        <h3 className="text text_type_main-medium mb-6">Булки</h3>
        <div className={`${styles.block} pl-4 mb-10`}>
          {buns.map((ingredient) => {
            return (
              <Ingredient
                key={ingredient._id}
                count={ingredient.__v}
                price={ingredient.price}
                name={ingredient.name}
                image={ingredient.image}
              />
            );
          })}
        </div>

        <h3 className="text text_type_main-medium mb-6">Соусы</h3>
        <div className={`${styles.block} pl-4 mb-10`}>
          {mains.map((ingredient) => {
            return (
              <Ingredient
                key={ingredient._id}
                count={ingredient.__v}
                price={ingredient.price}
                name={ingredient.name}
                image={ingredient.image}
              />
            );
          })}
        </div>

        <h3 className="text text_type_main-medium mb-6">Начинки</h3>
        <div className={`${styles.block} pl-4 mb-10`}>
          {sauces.map((ingredient) => {
            return (
              <Ingredient
                key={ingredient._id}
                count={ingredient.__v}
                price={ingredient.price}
                name={ingredient.name}
                image={ingredient.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
