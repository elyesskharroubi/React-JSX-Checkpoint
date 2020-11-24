import jsx from "./jsx.jpg";
// import react from "/react.svg"
import "./Style.css";

function App() {
  return (
    <>
      <div className="container" >
        <h1 className={"title red"}>React JSX Course with Dev Ed</h1>
        <br/>
        <img src={process.env.PUBLIC_URL + '/react.svg'} alt="jsx-code" width="200"/>
        <br/>
        <img src={jsx} alt="jsx-code" width="400"/>
      </div>
      <iframe
        src={"https://www.youtube.com/embed/BS9g6Z3lbBU"}
        width="320"
        height="240"
        frameborder="0"
        title="devEd"
      ></iframe>
    </>
  );
}

export default App;
