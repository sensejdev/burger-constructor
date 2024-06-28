import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./style.module.scss";

type Props = {
  count: number;
  image: string;
  name: string;
  price: number;
};

const Ingredient = ({ count, image, name, price }: Props) => {
  return (
    <div className={`${styles.ingredient}`}>
      {count !== 0 && <Counter count={count} size="default" />}
      <div className={`${styles.img} mb-2`}>
        <img src={image} alt={name} title={name} />
      </div>
      <div className={`${styles.currency} text text_type_digits-default mb-2`}>
        {price}
        <CurrencyIcon type="primary" />
      </div>
      <div className={`${styles.name} text text_type_main-default`}>{name}</div>
    </div>
  );
};

export default Ingredient;
