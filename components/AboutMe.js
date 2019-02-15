const AboutMe = () => (
  <div className="about-me-container">
    <div className="body-pad">
      <div className="about black">
        <h2>about me.</h2>
        <h3>sent at laoreet libero, molestie euismod enim. Suspend</h3>
        <p>
          Praesent at laoreet libero, molestie euismod enim. Suspendisse
          pulvinar, erat vel tincidunt rutrum, leo nibh ornare orci, nec
          pulvinar sem diam at sem.
        </p>
      </div>
      <div className="about yellow">
        <h2>&nbsp;</h2>
      </div>
    </div>
    <style jsx>{`
      .about-me-container {
        width: 100%;
        background-color: #000000;
      }
      about-me-container::after {
        content: "";
        clear: both;
        display: table;
      }
      .about {
        float: left;
        width: 50%;
        padding 3em 0em;
      }
      .black {
        background-color: rgba(1, 1, 1, 1);
        color: #FFFFFF;
      }
      .yellow {
        background-color: #E9BC03;
      }
      .about h2 {
        font-size: 2.3em;
        font-weight: bold;
      }
      h3, p {
        color: rgba(154,154,154,1);
      }
  `}</style>
  </div>
);

export default AboutMe;
