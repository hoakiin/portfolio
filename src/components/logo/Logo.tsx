import logo from "../../assets/images/logo.svg"
import { animateScroll as scroll} from "react-scroll";

export const Logo: React.FC = () => {
  return (
    <a onClick={() => {scroll.scrollToTop()}}>
      <img src={logo} alt="logo" />
    </a>
  );
};
