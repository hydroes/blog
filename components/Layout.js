import Header from "./Header";

const Layout = props => (
  <>
    <div className="header-container">
      <style>{`
      div.header-container {
        padding: 5% 0 1% 0;
        background-color: #000000;
      }
    `}</style>
      <Header />
    </div>
    {props.children}
  </>
);

export default Layout;
