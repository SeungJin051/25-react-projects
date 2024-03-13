import Accordian from "./components/accordian/index";
import RandomColor from "./components/random-color/index";
import StarRating from "./components/star-rating/index";
import ImageSlider from "./components/image-slider/index";
import LoadMoreData from "./components/load-more-data";

function App() {
  return (
    <>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating numOfstars={10} /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      <LoadMoreData />
    </>
  );
}

export default App;
