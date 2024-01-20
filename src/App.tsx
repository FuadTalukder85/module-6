import "./App.css";

function App() {
  const name = "Programming hero";
  const nameArr = name.split("");
  return (
    // <div className="main">
    //   <div className="loading">
    //     <div className="glass"></div>
    //     <div className="box"></div>
    //   </div>
    // </div>
    // <div className="main">
    //   <div className="card">
    //     <h1>Heading</h1>
    //     <p>
    //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non placeat
    //       cum incidunt nihil dolore at odio expedita aliquid repellendus. Esse
    //       alias quae at labore animi? Beatae numquam obcaecati ut tenetur!
    //     </p>
    //   </div>
    // </div>
    <div className="main">
      <div className="container">
        {nameArr.map((item, i) => (
          <span
            style={{ transitionDelay: `${i * 100}ms` }}
            key={i}
            className="alphabet"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
