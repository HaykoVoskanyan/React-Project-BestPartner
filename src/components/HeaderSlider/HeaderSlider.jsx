import Slider from "react-slick";
import './HeaderSlider.scss'
import HeaderSection from "../HeaderSection/HeaderSection";
import slide1 from '../../../public/images/HeaderSection.png'
import slide2 from '../../../public/images/HeaderSection2.jpg'
import slide3 from '../../../public/images/HeaderSection3.jpg'


function HeaderSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    ltr: true,
    arrows:false
  };
  return (
    <div className="slider-container">
      <Slider className="Slider" {...settings}>
        <div className="Slider-Image">
          <div className="gradient-overlay"></div>
          <img src={slide1} alt="slide1" />
        </div>
        <div className="Slider-Image">
          <div className="gradient-overlay"></div>
          <img className='img2' src={slide2} alt="slide2" />
        </div>
        <div className="Slider-Image">
          <div className="gradient-overlay"></div>
          <img src={slide3} alt="slide3" />
        </div>
      </Slider>
      <div className="slider-container-HeaderSection">
        <HeaderSection />
      </div>
    </div>
  );
}

export default HeaderSlider;
