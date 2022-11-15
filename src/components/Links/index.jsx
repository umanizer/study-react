import classes from './Links.module.css';

export function Links({ items }) {
  return (
    <div className={classes.grid}>
      {items.map((item) => (
        <a key={item.title} href={item.href} className={classes.card}>
          <h2 className={classes.title}>{item.title}</h2>
          <p className={classes.description}>{item.description}</p>
        </a>
      ))}
    </div>
  );
}
