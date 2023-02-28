import { Component } from "react";
import "./styles.css";

export class ImageBox extends Component {
  render() {
    return (
      <div className="box">
        <img src={this.props.dogImage} />
        <h1>{this.props.breed}</h1>
      </div>
    );
  }
}

export default ImageBox;
