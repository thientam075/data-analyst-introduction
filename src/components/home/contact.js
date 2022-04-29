import {
  BsFacebook, BsFillTelephoneFill, BsMailbox2, BsPinMapFill
} from "react-icons/bs";
import styles from "./home.module.css";
const Contact = () => {
  return (
    <>
      <section className={`${styles[`page-section`]} ${styles[`contact`]}`} id = 'contact'>
        <div className={`${styles[`container`]}`}>
          <div className={`${styles[`text-center`]}`}>
            <h2
              className={`${styles[`section-heading`]} ${
                styles[`text-uppercase`]
              }`}
            >
              Contact
            </h2>
            <h3
              className={`${styles[`section-subheading`]} ${
                styles[`text-muted`]
              }`}
            >
              Contact us if you want some infomation
            </h3>
          </div>

          <form id="contactForm">
            <div
              className={`${styles[`row`]} ${styles[`align-items-stretch`]} ${
                styles[`mb-5`]
              }`}
            >
              <div className={`${styles[`col-md-6`]}`}>
                <div className={`${styles[`form-group`]} ${styles[`mb-5`]}`}>
                  <BsFillTelephoneFill />
                  <span> 0365221451</span>
                </div>
                <div className={`${styles[`form-group`]} ${styles[`mb-5`]}`}>
                  <BsMailbox2 />
                  <span> huythiencn@gmail.com</span>
                </div>
                <div
                  className={`${styles[`form-group`]}  ${
                    styles[`mb-5`]
                  }`}
                >
                  <BsPinMapFill />
                  <span> Truong DH KHTN, Nguyen Van Cu, Quan 5, TP.HCM</span>
                </div>
                <div
                  className={`${styles[`form-group`]} ${styles[`mb-md-0`]} ${
                    styles[`mb-5`]
                  }`}
                >
                  <BsFacebook />
                  <span> https://www.facebook.com/huy.thien/</span>
                </div>
              </div>
              <div
                className={`${styles[`col-md-6`]}`}
                style={{ alignItem: "center" }}
              >
                <div className={`${styles[`team-member`]}`}>
                  <img
                    className={`${styles[`mx-auto`]} 
                    }`}
                    src='/home/mail.png'
                    alt="..."
                  />
                 
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
