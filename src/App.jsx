import Accordian from "./components/accordian/index";
import RandomColor from "./components/random-color/index";
import StarRating from "./components/star-raring/index";
import ImageSlider from "./components/image-slider/index";

function App() {
  return (
    <>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating numOfstars={10} /> */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </>
  );
}

export default App;
