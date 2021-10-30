import { Link } from "react-router-dom";
import App from "../App";
import "../App.css";
import ScrollArea from "react-scrollbar";

const Navbar = ({ show }) => {
  console.log(show);
  return (
    <div className={show ? "sidenav-active" : "sidenav"}>
      <ScrollArea className="react-scroll">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/accordions">Accordions</Link>
          </li>
          <li>
            <Link to="/bento1">Bento Icons</Link>
          </li>
          <li>
            <Link to="/breadcrumb1">Breadcrumb</Link>
          </li>

          <li>
            <Link to="/buttons">Buttons</Link>
          </li>
          <li>
            <Link to="/card1">Card</Link>
          </li>
          <li>
            <Link to="/carousel1">Carousel</Link>
          </li>
          <li>
            <Link to="/checkbox1">Checkbox</Link>
          </li>
          <li>
            <Link to="/doner1">Doner Icon</Link>
          </li>
          <li>
            <Link to="/dropdown1">Dropdown</Link>
          </li>
          <li>
            <Link to="/form1">Form</Link>
          </li>
          <li>
            <Link to="/hamburger1">Hamburger</Link>
          </li>
          <li>
            <Link to="/icons1">Icons</Link>
          </li>
          <li>
            <Link to="/input1">Input filed</Link>
          </li>
          <li>
            <Link to="/kebabo1">Kebobo Icon</Link>
          </li>
          <li>
            <Link to="/loder1">LoderIcon</Link>
          </li>
          <li>
            <Link to="/metoballmenu1">Metoballmenu </Link>
          </li>
          <li>
            <Link to="/modal1">Modal </Link>
          </li>
          <li>
            <Link to="/notification1">Notification</Link>
          </li>
          <li>
            <Link to="/pagination1">Pagination</Link>
          </li>
          <li>
            <Link to="/pickercolor">Pickercolor</Link>
          </li>
          <li>
            <Link to="/calenderpicker">Calenderpicker</Link>
          </li>
          <li>
            <Link to="/progressbar1">ProgressBar</Link>
          </li>
          <li>
          <Link to="/radio1"> Radio Buttons</Link>
        </li>
          <li>
            <Link to="/search"> Search Field</Link>
          </li>
          <li>
            <Link to="/sidemenu"> Sidemenu</Link>
          </li>
          <li>
            <Link to="/slider"> Slider</Link>
          </li>
          <li>
          <Link to="/stepper1"> Stepper</Link>
        </li>
        <li>
        <Link to="/tag1"> Tag</Link>
      </li>
      <li>
      <Link to="/tooltip1"> Tooltip</Link>
    </li>
    <li>
    <Link to="/toggle1"> Toggle</Link>
  </li>
  <li>
  <Link to="/video"> Video Player</Link>
</li>
        </ul>
      </ScrollArea>
    </div>
  );
};
export default Navbar;
