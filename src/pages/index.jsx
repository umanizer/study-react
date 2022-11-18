import Head from 'next/head';
import styles from '../styles/Home.module.css';
// import { Main } from '../components/Main';
// import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
// import { useCallback, useEffect, useState } from 'react';
import { Posts } from 'src/components/Posts';

const Home = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Posts />
    </div>
  );
};
export default Home;
