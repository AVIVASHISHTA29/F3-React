import { faqArray } from "./array";
import { imgArr } from "./imgArr";
import FAQComponent from "./components/FAQComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="container">
      {/* {imgArr.map((item) => {
        return <ImageComponent dogImage={item.dogImage} breed={item.breed} />;
      })} */}
      {faqArray.map((item) => {
        return <FAQComponent text={item} />;
      })}
    </div>
  );
}

export default App;

// JSX = Rendering an HTML element inside a function
