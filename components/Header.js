import Link from "next/link";

const Header = () => (
  <>
    <style>{`
      div {
        text-align: center;
      }
    `}</style>
    <div>
      <h1>
        Life of <span>Brian.</span>
      </h1>
      <p>
        Hi there, I am a <span>fullstack</span> web developer
      </p>
      <Link href="/about">
        <div className="find-out-more">
          <a>
            <span>Find out more</span>
          </a>
        </div>
      </Link>

      <style jsx>{`
        h1 {
          margin: auto;
          color: white;
          border: 5px;
          font-size: 6em;
        }
        h1 span {
          color: rgba(255, 205, 60, 1);
        }
        p {
          font-size: 28px;
          line-height: 42px;
          text-align: center;
          color: rgba(255, 255, 255, 1);
        }

        p span {
          color: rgba(255, 205, 60, 1);
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
          font-weight: 900;
          font-size: 14px;
          text-align: center;
          letter-spacing: px;
          text-transform: uppercase;
          color: rgba(1, 1, 1, 1);
          transition: 0.3s ease;
          display: block;
        }
      `}</style>
    </div>
  </>
);

export default Header;
