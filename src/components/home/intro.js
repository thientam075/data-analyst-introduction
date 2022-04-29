
import styles from "./home.module.css";
const Intro = () => {
  return (
    <>
      {/* Services */}
      <section
        className={`${styles[`page-section`]}`}
        id="services"
        style={{ backgroundColor: "gainsboro" }}
      >
        <div className={`${styles[`container`]}`}>
          <div className={`${styles[`text-center`]}`}>
            <h2
              className={`${styles[`section-heading`]} ${styles[`text-uppercase`]
              }`}
            >
              PRODUCT
            </h2>
            <h3
              className={`${styles[`section-subheading`]} ${
                styles[`text-muted`]
              }`}
            >
              Introduction, advantages and vision of the application
            </h3>
          </div>
          <div className={`${styles[`row`]}`}>
            <div className={`${styles[`col-lg-6`]}`}>
              <div className={`${styles[`team-member`]}`}>
                <img
                  className={`${styles[`mx-auto`]} ${styles[`rounded-circle`]}`}
                  src='/home/gioithieu.png'
                  alt="..."
                />
                <h4>Introduction</h4>
                <p className={`${styles[`text-muted`]}`}>
                  This app allow everyone analyst data more detail with any source which they have. More saving time more clear with data
                </p>
                
              </div>
            </div>
            <div className={`${styles[`col-lg-6`]}`}>
              <div className={`${styles[`team-member`]}`}>
                <img
                  className={`${styles[`mx-auto`]} ${styles[`rounded-circle`]}`}
                  src='/home/uudiem.png'
                  alt="..."
                />
                <h4>Advantages</h4>
                <p className={`${styles[`text-muted`]}`}>
                  - Easy to use <br/>
                  - Free to test <br/>
                  - Authenticate good with team <br/>
                  - Ensure security for your data <br/>
                </p>
                
              </div>
            </div>
          </div>
          <div className={`${styles[`text-center`]}`}>
            <div
              className={`${styles[`btn`]} ${styles[`btn-primary`]} ${
                styles[`btn-xl`]
              } ${styles[`text-uppercase`]}`}
            >
              More Detail
            </div>
          </div>
        </div>
      </section>
      {/* Team */}
    </>
  );
};

export default Intro;
  