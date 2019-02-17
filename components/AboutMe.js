const AboutMe = () => (
  <div className="flex-container black">
    <div className="black about">
      <h2>about me</h2>
      <h3>sent at laoreet libero, molestie euismod enim. Suspend</h3>
      <p>
        Praesent at laoreet libero, molestie euismod enim. Suspendisse pulvinar,
        erat vel tincidunt rutrum, leo nibh ornare orci, nec pulvinar sem diam
        at sem.
      </p>
    </div>
    <div className="yellow">
      <img src="https://via.placeholder.com/470x300.png" />
    </div>

    <style jsx>{`
      .flex-container {
        display: flex;
        justify-content: center;
      }

      .flex-container > div {
        width: 40%;
      }
      .black {
        background-color: rgba(1, 1, 1, 1);
        color: #ffffff;
      }
      .yellow {
        background-color: #e9bc03;
        text-align: center;
      }
      .about > h2 {
        font-size: 3em;
        font-weight: 700;
        letter-spacing: 2px;
      }
      p {
        color: rgba(154, 154, 154, 1);
      }
    `}</style>
  </div>
);

export default AboutMe;
