import Image from 'next/image'
import Logo from "@/public/images/Github.png"
import styles from './footer.module.scss'

const Footer = () => (
    <footer className={styles.footer}>
        <a
            href="https://github.com/StynV/cv"
            target="_blank"
            rel="noreferrer"
            itemProp='author'
        >
            <Image
                src={Logo}
                alt={'Source code'}
                width={80}
                height={80}
            />
        </a>
    </footer>
)

export default Footer
