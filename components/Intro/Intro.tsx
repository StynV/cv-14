import { useTranslation } from '../../app/i18n'
import YGWYS from '../YGWYS/YGWYS'
import styles from './intro.module.scss'

const Intro = async () => {
  const { t } = await useTranslation('en')

  const html: string = t('intro2')

  return (
      <article
        className={styles.intro}
        itemScope
        itemType='https://schema.org/Article'
      >
        <p className={styles.text}>{t('intro1')}</p>
        <YGWYS html={html} className={styles.text} />
        <p className={styles.text}>{t('intro3')}</p>
      </article>
  )
}

export default Intro
