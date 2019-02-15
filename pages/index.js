import Layout from "../components/Layout";
import Link from "next/link";
import AboutMe from "../components/AboutMe";

export default () => (
  <Layout>
    <div className="find-out-more-container">
      <Link href="/about">
        <div className="find-out-more">
          <a>
            <span>Get in touch</span>
          </a>
        </div>
      </Link>
    </div>
    <h2 className="body-pad">portfolio.</h2>
    <p className="body-pad">
      Please check some of mine recent projects below. Cras ut nisl consectetur,
      lacinia nisl at, malesuada mauris.
    </p>

    <AboutMe />

    <style jsx>{`
      h2 {
        font-family: "Montserrat", sans-serif;
        font-size: 42px;
        font-weight: 700;
        color: rgba(1, 1, 1, 1);
        letter-spacing: 2px;
        text-transform: lowercase;
      }
      p {
        width: 30%;
        margin: 0px 0px;
        font-family: "Montserrat", sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 28px;
        color: rgba(71, 71, 71, 0.9);
      }
      .find-out-more-container {
        background-color: black;
        padding-bottom: 3%;
      }
      .find-out-more {
        width: 160px;
        height: 50px;
        margin: auto;
        background: rgba(255, 205, 60, 1);
        border: 2px solid rgba(255, 205, 60, 1);
        transition: 0.3s ease;
      }
      .find-out-more:hover {
        background: transparent;
      }
      .find-out-more:hover > a > span {
        color: white;
      }
      .find-out-more > a {
        display: block;
        cursor: pointer;
        width: 100%;
        // height: 100%;
        text-decoration: none;
      }
      .find-out-more > a > span {
        padding: 17px 0px;
        // font-weight: 900;
        font-size: 14px;
        text-align: center;
        letter-spacing: px;
        text-transform: uppercase;
        color: rgba(1, 1, 1, 1);
        transition: 0.3s ease;
        display: block;
      }
    `}</style>
  </Layout>
);
