import Head from 'next/head';
import styles from '../../../styles/Home.module.css';
import { Header } from '../../../components/Header';
import { useRouter } from 'next/router';


const PostId
 = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <div>{router.query.id}</div>
    </div>
  );
};
export default PostId
;
