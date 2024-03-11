import { useTranslation } from '../i18n'
import styles from "./page.module.css";

export default async function Home({ params: { lng } }: {params: { lng: string } }) {
  const { t } = await useTranslation(lng)

  return (
    <main className={styles.main}>
      {t('name')}
    </main>
  );
}
