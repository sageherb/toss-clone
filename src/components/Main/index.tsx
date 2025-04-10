import Article from "./Article";
import Author from "./Author";
import Series from "./Series";

function Main() {
  return (
    <main className="main">
      <div className="main__layout">
        <Series />
        <Article />
        <Author />
      </div>
    </main>
  );
}

export default Main;
