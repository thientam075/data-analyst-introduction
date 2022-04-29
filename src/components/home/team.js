import {Container} from '@mui/material'
import styles from "./home.module.css";
const Team = () => {
  return (
    <>
      {/* Diniver */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 12,
          py: [4, 0],
        }}
      >
      </Container>
      {/* Team */}
      <section className={`${styles[`page-section`]}`} id="team">
        <div className={`${styles[`container`]}`}>
          <div className={`${styles[`text-center`]}`}>
            <h2
              className={`${styles[`section-heading`]} ${
                styles[`text-uppercase`]
              }`}
            >
              Develop Team
            </h2>
            <h3
              className={`${styles[`section-subheading`]} ${
                styles[`text-muted`]
              }`}
            >
              We alway try to develop app more better
            </h3>
          </div>
          <div className={`${styles[`row`]}`}>
            <div className={`${styles[`col-lg-3`]}`}>
              <div className={`${styles[`team-member`]}`}>
                <img
                  className={`${styles[`mx-auto`]} ${styles[`rounded-circle`]}`}
                  src='/home/Tam.jpg'
                  alt="..."
                />
                <h4>Thiện Tâm</h4>
                <p className={`${styles[`text-muted`]}`}>Developer</p>
                
              </div>
            </div>
            <div className={`${styles[`col-lg-3`]}`}>
              <div className={`${styles[`team-member`]}`}>
                <img
                  className={`${styles[`mx-auto`]} ${styles[`rounded-circle`]}`}
                  src='/home/Thanh.jpg'
                  alt="..."
                />
                <h4>Minh Thành</h4>
                <p className={`${styles[`text-muted`]}`}>Developer</p>
                
              </div>
            </div>
            <div className={`${styles[`col-lg-3`]}`}>
              <div className={`${styles[`team-member`]}`}>
                <img
                  className={`${styles[`mx-auto`]} ${styles[`rounded-circle`]}`}
                  src='/home/Thien.jpg'
                  alt="..."
                />
                <h4>Huy Thiện</h4>
                <p className={`${styles[`text-muted`]}`}>Developer</p>
                
              </div>
            </div>
            <div className={`${styles[`col-lg-3`]}`}>
              <div className={`${styles[`team-member`]}`}>
                <img
                  className={`${styles[`mx-auto`]} ${styles[`rounded-circle`]}`}
                  src='/home/Thinh.jpg'
                  alt="..."
                />
                <h4>Hữu Thịnh</h4>
                <p className={`${styles[`text-muted`]}`}>Developer</p>
                
              </div>
            </div>
          </div>
          <div className={`${styles[`row`]}`}>
            <div className={`${styles[`col-lg-3`]}`}>
            </div>
            <div className={`${styles[`col-lg-3`]}`}>
              <div className={`${styles[`team-member`]}`}>
                <img
                  className={`${styles[`mx-auto`]} ${styles[`rounded-circle`]}`}
                  src='/home/Nhi.jpeg'
                  alt="..."
                />
                <h4>Huỳnh Nhi</h4>
                <p className={`${styles[`text-muted`]}`}>Developer</p>
                
              </div>
            </div>
            <div className={`${styles[`col-lg-3`]}`}>
              <div className={`${styles[`team-member`]}`}>
                <img
                  className={`${styles[`mx-auto`]} ${styles[`rounded-circle`]}`}
                  src='/home/Man.jpeg'
                  alt="..."
                />
                <h4>Hoàng Mẫn</h4>
                <p className={`${styles[`text-muted`]}`}>Developer</p>
                
              </div>
            </div>
            <div className={`${styles[`col-lg-3`]}`}>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
