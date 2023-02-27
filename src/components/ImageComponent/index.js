import "./styles.css";

// function ImageComponent({ dogImage, breed, id }) {
//   return (
//     <div className="box">
//       <img src={dogImage} />
//       <h1>{breed}</h1>
//     </div>
//   );
// }

function ImageComponent(props) {
  console.log("PROPS>>>", props);
  return (
    <div className="box">
      <img src={props.dogImage} />
      <h3>{props.breed}</h3>
    </div>
  );
}

export default ImageComponent;
