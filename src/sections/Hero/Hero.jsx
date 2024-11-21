import styles from './HeroStyles.module.css';
import heroImg from '../../assets/avatar.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import facebookLight from '../../assets/facebook-light.svg';
import facebookDark from '../../assets/facebook-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import instagramLight from '../../assets/instagram-light.svg';
import instagramDark from '../../assets/instagram-dark.svg';
import CV from '../../assets/CV.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const facebookIcon = theme === 'light' ? facebookLight : facebookDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const instagramIcon = theme === 'light' ? instagramLight : instagramDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Xuan Viet"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Dinh Xuan
          <br />
          Viet
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://www.facebook.com/vietdnih73" target="_blank">
            <img src={facebookIcon} alt="Facebook icon" />
          </a>
          <a href="https://github.com/xuanviet73" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.instagram.com/vietdnih.73/?theme=dark" target="_blank">
            <img src={instagramIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
            Hi, my full name is Dinh Xuan Viet, but just call me Viet
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
