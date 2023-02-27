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
  console.log("PROPS>>>", props, props.id);
  return (
    <div className="box">
      <img src={props.dogImage} />
      <h1>{props.breed}</h1>
    </div>
  );
}

export default ImageComponent;
