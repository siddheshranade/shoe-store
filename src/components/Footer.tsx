import styles from './Footer.module.css';

const Footer = () => {
  return (
  <div className={styles.footerParent}>
    <div className={styles.footerLogo}>
      <img src='../../public/images/logo-white.svg'/>
    </div>
    <div className={styles.footerIcons}>
      <img src='../../public/images/instagram.svg'/>
      <img src='../../public/images/twitter.svg'/>
      <img src='../../public/images/youtube.svg'/>
    </div>
    <div className={styles.footerText}>
      <p>© 2023 dot.cards text task. All rights reserved</p>
    </div>
  </div>
  )
};

export default Footer;