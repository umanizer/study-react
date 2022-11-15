import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { useBgLightBlue } from 'src/hooks/useBgLightBlue';

export default function About({
    count,
    isShow,
    handleClick,
    handleDisplay,
    text,
    array,
    handleChange,
    handleAdd,
  } ) {


  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
      </Head>
      <Header />
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? '非表示' : '表示'}</button>
      {isShow ? <h1>{count}</h1> : null}
      <hr />
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="about" />

      <Footer />
    </div>
  );
}
