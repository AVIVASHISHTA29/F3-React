import { faqArray } from "./array";
import { imgArr } from "./imgArr";
import FAQComponent from "./components/FAQComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  const roll = 24;

  return (
    <div className="container">
      {imgArr.map((item, i) => (
        <ImageComponent key={i} breed={item.breed} dogImage={item.dogImage} />
      ))}
    </div>
  );
}

export default App;

// JSX = Rendering an HTML element inside a function
