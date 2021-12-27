import React from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menu';
import NameForm from './components/name_form';
import { PLACES } from './shared/places';
import { RiShoppingBasket2Line } from "react-icons/ri";
import { IoLogoGameControllerB } from "react-icons/io";
import { BsDice3,BsGithub } from "react-icons/bs";
import image001 from "./assets/001.jfif";
import image002 from "./assets/002.jfif";
import image003 from "./assets/003.jfif";
import image004 from "./assets/004.jfif";
import image005 from "./assets/005.jfif";
import image006 from "./assets/006.jfif";
import image007 from "./assets/007.jfif";
import image008 from "./assets/008.jfif";

class App extends React.Component {					
  
	constructor(props){
		super(props);
		
		this.state = {
			places: PLACES
		};
	}
	
	render(){
		return (
			<div className='App'>

				<Navbar color="primary">
					<div className="container center-between" id="brand">
						<NavbarBrand>React App</NavbarBrand>
						<div className='center-between'>
							<BsGithub className='nav-icon' style={{color:"black"}}/>
							<RiShoppingBasket2Line className='nav-icon'/>
							<IoLogoGameControllerB className='nav-icon'/>
							<BsDice3 className='nav-icon'/>
						</div>
					</div>
				</Navbar>
				<div className='container'>
					<div className='row large-one'>
						<div className='col-md-4'><h1>large 0001</h1></div>
						<div className='col-md-4'><h1>large 0002</h1></div>
						<div className='col-md-4'><h1>large 0003</h1></div>
					</div>
					<div className='row large-two'>
						<div className='col-md-4'><h1>large 0004 We are waiting your visit</h1></div>
						<div className='col-md-4'><h1>large 0005 Welcome to your visit, We can help you to get pleasure</h1></div>
						<div className='col-md-4'><h1>large 0006 Enywhere, Whatever, EnyTime, we are ready for you.</h1></div>
					</div>
					<div className='row medium-one'>
						<div className='col-md-4'><h3>medium Famous Places001 of Thailand</h3></div>
						<div className='col-md-4'><h3>medium Famous Places002 of Thailand</h3></div>
						<div className='col-md-4'><h3>medium Famous Places003 of Thailand</h3></div>
					</div>
					<div className="medium-two">
						<div><h3>medium breakpoint001 Famous Places of Thailand</h3></div>
						<div><h3>medium breakpoint002 Famous Places of Thailand</h3></div>
						<div><h3>medium breakpoint003 Famous Places of Thailand</h3></div>
					</div>
					
					<NameForm/>
					<Menu places={this.state.places} />

					<div id="container">
						<div id="primary-content" role="main">
							<div id="unit-kitten-content" className="unit">
								<header id="header">
									<h1>placekitten</h1>
								</header>
								<p title="It fits a gap in the market. "><strong>A quick and simple service for getting pictures of kittens for use as placeholders in your designs or code.</strong> Just put your image size (width <span className="amp">&amp;</span> height) after our URL and you'll get a&nbsp;placeholder.</p>
								<p className="links">
									Like this: <a href="/200/300">http://placekitten.com/200/300</a><br/>
									or: <a href="/g/200/300">http://placekitten.com/g/200/300</a>
								</p>
								<img id="image-0" src={image008} alt=""/>
							</div>
							<div id="unit-many-many-pictures-of-small-cats" className="unit">
								<img id="image-1"  src={image002} alt=""/>
								<img id="image-2" src={image003} alt=""/>
								<img id="image-3" src={image001} alt=""/>
								<img id="image-4" src={image007} alt=""/>
								<img id="image-5" src={image005} alt=""/>
								<img id="image-6" src={image006} alt=""/>
								<img id="image-7" src={image004} alt=""/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;