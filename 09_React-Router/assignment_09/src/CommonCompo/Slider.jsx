import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/esm/Container";

function Slider() {
  return (
    <Container>
      <Carousel className="mt-3" data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 h-50vh rounded-5 my-3"
            src="https://i.ytimg.com/vi/kkiTh42mRT4/maxresdefault.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50vh rounded-5 my-3"
            src="https://naxontech.com/wp-content/uploads/2023/06/Big-news-about-Hero-Xpulse-420-know-when-this-powerful.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50vh rounded-5 my-3"
            src="https://static.autox.com/uploads/2023/06/667A0082.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50vh rounded-5 my-3"
            src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/124013/hunter-350-right-front-three-quarter.jpeg?isig=0" alt="Royal Enfield Hunter 350"

          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50vh rounded-5 my-3"
            src="https://bd.gaadicdn.com/processedimages/royal-enfield/meteor/source/meteor62de7e2c52273.jpg" alt="Royal Enfield Meteor"

          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50vh rounded-5 my-3"
            src="https://imgd.aeplcdn.com/0x0/bw/ec/33557/Royal-Enfield-Thunderbird-350X-Front-threequarter-122867.jpg?wm=0" alt="Royal Enfield Thunderbird 350X"

          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Slider;
