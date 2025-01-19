import { type FC } from "react";
import styles from "./styles/header.module.css";
import { pathnames } from "../../app/pathnames";
import { Link } from "react-router";
import { useLocation } from "react-router";

interface INavItem {
  title: string;
  href: string;
}

const navItems: INavItem[] = [
  {
    title: "Все котики",
    href: pathnames.HOME,
  },
  {
    title: "Любимые котики",
    href: pathnames.FAVORITES,
  },
];

const NavItem: FC<INavItem> = ({ title, href }) => {
  const { pathname } = useLocation();
  const activeStyle = [styles.nav__item, styles.active].join(" ");

  return (
    <Link
      to={href}
      className={pathname === href ? activeStyle : styles.nav__item}
    >
      {title}
    </Link>
  );
};

const Header: FC = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.nav__container}>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <NavItem {...item} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
