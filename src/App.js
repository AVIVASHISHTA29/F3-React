import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="container">
      <ImageComponent
        dogImage="https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg"
        breed="Beagle"
      />
      <ImageComponent
        dogImage="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSN0H_fITifuEnoFOGdLFkTBTbGwIWlLSeNiSit4I7vLdckpNBaoLvk9mhSZzDyEc5GjhVRwvuwHH1Mj-0"
        breed="Labrador"
      />
      <ImageComponent
        dogImage="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQvOLL9MUidlzpbho3WGsZ6sIq0XwuBPmd6-uekJ-O5hFhj0sVv8XL-OhJ8GnLV-1tq"
        breed="Husky"
      />
      <ImageComponent
        dogImage="https://www.akc.org/wp-content/uploads/2017/11/German-Shepherd-on-White-00.jpg"
        breed="German Sheapard"
      />
    </div>
  );
}

export default App;

// JSX = Rendering an HTML element inside a function
