import Header from "./Header";

const Layout = props => (
  <>
    <div className="header-container">
      <style>{`
      div.header-container {
        padding: 5% 0 3% 0;
        background-color: black;
      }
    `}</style>
      <Header />
    </div>
    <div>{props.children}</div>
  </>
);

export default Layout;
