import Link from 'next/link';
import classes from './Header.module.css';

export const Header = () => {
  const NAV_ITEMS = [
    { href: '/', label: 'Index' },
    { href: '/about', label: 'About' },
  ];
  return (
    <header className={classes.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            <a className={classes.anchor}>{item.label}</a>
          </Link>
        );
      })}
    </header>
  );
};
