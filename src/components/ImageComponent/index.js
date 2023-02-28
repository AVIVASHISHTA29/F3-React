import "./styles.css";

// function ImageComponent({ dogImage, breed }) {
//   // { dogImage, breed, id } = props
//   return (
//     <div className="box">
//       <img src={dogImage} />
//       <h1>{breed}</h1>
//     </div>
//   );
// }

const ImageComponent = (props) => {
  console.log("PROPS>>>", props);
  return (
    <div className="box">
      <img src={props.dogImage} />
      <h3>{props.breed}</h3>
    </div>
  );
};

export default ImageComponent;
