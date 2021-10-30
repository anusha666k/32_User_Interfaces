import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import "./App.css";
import Home from "./pages/Home";
import Accordions from "./pages/Accordions";
import Breadcrumb1 from "./pages/Breadcrumb";
import Buttons from "./pages/Buttons";
import Card from "./pages/Card1";
import Carousel from "./pages/Carousel1";
import Checkbox from "./pages/Checkbox1";
import Dropdown from "./pages/Dropdown1";
import Form from './pages/Form1';
import Hamburger from './pages/Hamburger1';
import Icons from './pages/Icons1';
import Input from './pages/Input1';
import Bento from './pages/Bento1';
import Doner from './pages/Doner'
import Kebabo from "./pages/Kebabo";
import Metoballmenu from "./pages/Metoballmenu";
import Loader from "./pages/Loader";
import Modal from "./pages/Modal1";
import Notification1 from "./pages/Notification1";
import Pagination1 from "./pages/Pagination1";
import Pickercolor from "./pages/Pickercolor";
import Calenderpicker from "./pages/Calenderpicker";
import Progressbar from "./pages/Progressbar1";
import Search from "antd/lib/transfer/search";
import Sidebar from "./pages/Sidebar";

import Slider1 from "./pages/Slider1";
import Stepper1, { Stepper } from "./pages/Stepper1";
import { Tag } from "antd";
import Tag1 from "./pages/Tag1";
import Tooltip1 from "./pages/Tooltip1";
import Toggle1 from "./pages/Toggle1";
import Radio1 from "./pages/Radio1";
import Video from "./pages/Video";


function App() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <Router>
        <header>
          <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
        </header>
        <Navbar show={showNav} />
        <div className="main ">
      
          <Route path="/" exact={true} component={Home} className="center-col"/>
          <Route path="/accordions" exact={true} component={Accordions} className="center-col"/>
          <Route path="/breadcrumb1" exact={true} component={Breadcrumb1} />
          <Route path="/buttons" exact={true} component={Buttons} />
          <Route path="/card1" exact={true} component={Card} />
          <Route path="/carousel1" exact={true} component={Carousel} />
          <Route path="/checkbox1" exact={true} component={Checkbox} />
          <Route path="/dropdown1" exact={true} component={Dropdown} />
          <Route path="/form1" exact={true} component={Form} />
          <Route path="/hamburger1" exact={true} component={Hamburger} />
          <Route path="/icons1" exact={true} component={Icons} />
          <Route path="/input1" exact={true} component={Input} />
          <Route path="/bento1" exact={true} component={Bento} />
          <Route path="/doner1" exact={true} component={Doner} />
          <Route path="/kebabo1" exact={true} component={Kebabo} />
          <Route path="/metoballmenu1" exact={true} component={Metoballmenu} />
          <Route path="/loder1" exact={true} component={Loader} />
          <Route path="/modal1" exact={true} component={Modal} />
          <Route path="/notification1" exact={true} component={Notification1} />
          <Route path="/pagination1" exact={true} component={Pagination1}/>
          <Route path="/pickercolor" exact={true} component={Pickercolor}/>
          <Route path="/calenderpicker" exact={true} component={Calenderpicker}/>
          <Route path="/progressbar1" exact={true} component={Progressbar}/>
          <Route path="/search" exact={true} component={Search}/>
          <Route path="/sidemenu" exact={true} component={Sidebar}/>
          
          <Route path="/stepper1" exact={true} component={Stepper1}/>
          <Route path="/tag1" exact={true} component={Tag1}/>
          <Route path="/tooltip1" exact={true} component={Tooltip1}/>
          <Route path="/toggle1" exact={true} component={Toggle1}/>
          <Route path="/radio1" exact={true} component={Radio1}/>
          <Route path="/video" exact={true} component={Video}/>
         
        </div>
      </Router>
  
    </>
  );
}

export default App;
