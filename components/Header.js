import Link from "next/link";

const Header = () => (
  <div>
    <div>
      <Link href="/">
        <h1>
          Life of <span>Brian.</span>
        </h1>
      </Link>
      <p>
        A <span>fullstack</span> web developer based in <span>London</span>.
      </p>

      <style jsx>{`
        div {
          text-align: center;
        }
        h1 {
          margin: auto;
          width: 60%;
          color: white;
          border: 5px;
          font-size: 6em;
          font-weight: 500;
        }
        h1:hover {
          cursor: pointer;
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
      `}</style>
    </div>
  </div>
);

export default Header;
