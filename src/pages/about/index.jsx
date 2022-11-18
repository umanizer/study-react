import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { useBgLightBlue } from 'src/hooks/useBgColor';

const About = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
      </Head>
      <Header />
      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleDisplay}>
        {props.isShow ? '非表示' : '表示'}
      </button>
      {props.isShow ? <h2>{props.doubleCount}</h2> : null}
      <hr />
      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加</button>
      <ol>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ol>
      <Main page="about" />

      <Footer />
    </div>
  );
};

export default About;
