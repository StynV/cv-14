import Header from '@/components/Header/Header';
import styles from "./page.module.css";

export default async function Home({ params: { lng } }: {params: { lng: string } }) {

  return (
    <main className={styles.main}>
      <Header />
    </main>
  );
}
