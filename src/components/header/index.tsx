import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./style.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={`${styles.body} pt-4 pb-4`}>
          <a href="/" className={`${styles.link} mr-2 pt-4 pb-4 pl-5 pr-5`}>
            <BurgerIcon type="primary" />
            <span className="text text_type_main-default">Конструктор</span>
          </a>

          <a href="/" className={`${styles.link} mr-2 pt-4 pb-4 pl-5 pr-5`}>
            <ListIcon type="secondary" />
            <span className="text text_type_main-default text_color_inactive">
              Лента заказов
            </span>
          </a>

          <a
            href="/"
            className={`${styles.link} ${styles.link_profile} mr-2 pt-4 pb-4 pl-5 pr-5`}
          >
            <ProfileIcon type="secondary" />
            <span className="text text_type_main-default text_color_inactive">
              Личный кабинет
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
