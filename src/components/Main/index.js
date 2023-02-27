import "./styles.css";

function MainComponent() {
  const myName = "Avi";
  const flag = false;

  function myFunction(name) {
    console.log("hi " + name);
  }

  // var my_name vs var myName

  return (
    <div className="main-container">
      <h1
      // onClick={() => myFunction()}
      // onMouseDown={() => {
      //   console.log("mouse is clicking down on h1");
      // }}
      // onMouseUp={() => {
      //   console.log("mouse is clicking up on h1");
      // }}
      // onMouseOver={() => console.log("mouse is over the h1")}
      >
        {myName}
      </h1>
      <input type="text" onChange={(e) => console.log(e.target.value)} />
      {/* <button onclick="myFunction()">My button</button> */}
      <button onClick={() => myFunction("avi")}>My button</button>
    </div>
  );
}
export default MainComponent;
