import styles from "./home.module.css";
import {Container, Link, Typography} from '@mui/material'
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/HuyThien">
        Data Analyst
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
  return (
    <>
      <footer
        className={`${styles[`footer`]} ${styles[`py-4`]}`}
        style={{ backgroundColor: "gainsboro" }}
      >
        <div className={`${styles[`container`]}`}>
          <div className={`${styles[`row`]} ${styles[`align-items-center`]}`}>
            <div className={`${styles[`col-lg-4`]} ${styles[`text-lg-start`]}`}>
              Builded and Developed by Team DATN
            </div>
            <div
              className={`${styles[`col-lg-4`]} ${styles[`my-3`]} ${
                styles[`my-lg-0`]
              }`}
            ></div>
            <div className={`${styles[`col-lg-4`]} ${styles[`text-lg-end`]} `}>
              <Container
                maxWidth="md"
                component="footer"
                sx={{
                  borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                  py: [3, 6],
                }}
              >
                <Copyright sx={{ mt: 2 }} />
              </Container>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
