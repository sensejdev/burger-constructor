import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./style.module.scss";

const Constructor = () => {
  return (
    <div className={`${styles.constructor} pt-25`}>
      <div className={`${styles.body} mb-10`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={20}
          thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          extraClass="mr-4"
        />
        <div className={`${styles.list} pr-2`}>
          <div className={`${styles.item}`}>
            <div className={`${styles.drag}`}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Соус традиционный галактический"
              price={30}
              thumbnail={"https://code.s3.yandex.net/react/code/sauce-03.png"}
            />
          </div>
          <div className={`${styles.item}`}>
            <div className={`${styles.drag}`}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Мясо бессмертных моллюсков Protostomia"
              price={300}
              thumbnail={"https://code.s3.yandex.net/react/code/meat-02.png"}
            />
          </div>

          <div className={`${styles.item}`}>
            <div className={`${styles.drag}`}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Плоды Фалленианского дерева"
              price={80}
              thumbnail={"https://code.s3.yandex.net/react/code/sp_1.png"}
            />
          </div>

          <div className={`${styles.item}`}>
            <div className={`${styles.drag}`}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={
                "https://code.s3.yandex.net/react/code/mineral_rings.png"
              }
            />
          </div>

          <div className={`${styles.item}`}>
            <div className={`${styles.drag}`}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={
                "https://code.s3.yandex.net/react/code/mineral_rings.png"
              }
            />
          </div>

          <div className={`${styles.item}`}>
            <div className={`${styles.drag}`}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={
                "https://code.s3.yandex.net/react/code/mineral_rings.png"
              }
            />
          </div>
        </div>

        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ"
          price={20}
          thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          extraClass="mr-4"
        />
      </div>

      <div className={`${styles.bottom} mr-4`}>
        <div className={`${styles.total_price} mr-10`}>
          <p className="text text_type_digits-medium mr-2">610</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

export default Constructor;
