import styles from "./home.module.css";
const Header = () => {
  return (
    <>
      <header className={`${styles[`masthead`]}`} id="header">
        <div className={`${styles[`container`]}`}>
          <div className={`${styles[`masthead-heading`]}`}>
            Welcome to Data Analyst
          </div>
          <div
            className={`${styles[`masthead-subheading`]} ${
              styles[`text-capitalize`]
            }`}
            style={{ lineHeight: "normal" }}
          >
            Data Analyst is a modern data exploration <br />
            and visualization platform
          </div>
          <a
            className={`${styles[`btn`]} ${styles[`btn-danger`]} ${
              styles[`btn-lg`]
            } ${styles[`text-capitalize`]}`}
            href="#pricing"
          >
            Get Started
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
