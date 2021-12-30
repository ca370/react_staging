import React from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import NameForm from './components/name_form';
import { RiShoppingBasket2Line } from "react-icons/ri";
import { IoLogoGameControllerB } from "react-icons/io";
import { BsDice3, BsGithub } from "react-icons/bs";
import axios from 'axios';

import image001 from "./assets/001.jfif";
import image002 from "./assets/002.jfif";
import image003 from "./assets/003.jfif";
import image004 from "./assets/004.jfif";
import image005 from "./assets/005.jfif";
import image006 from "./assets/006.jfif";
import image007 from "./assets/007.jfif";
import image008 from "./assets/008.jfif";

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			placeOne: [],
			placeTwo: []
		};
	}

	callAPIOne() {
		axios.get(`https://3000-amber-hedgehog-usxt1b8q.ws-us25.gitpod.io/place/one`)
			.then(res => {
				const places = res.data;
				this.setState({
					placeOne: places.data
				})
			})
	}
	callAPITwo() {
		axios.get(`https://3000-amber-hedgehog-usxt1b8q.ws-us25.gitpod.io/place/two`)
			.then(res => {
				const places = res.data;
				this.setState({
					placeTwo: places.data
				})
			})
	}

	componentWillMount() {
		this.callAPIOne();
		this.callAPITwo();
	}


	bigButton(){
		const element = document.getElementsByTagName("ul")[0]
		element.classList.toggle("big")
	}

	render() {
		let { placeOne, placeTwo } = this.state
		const largeOne = placeOne.map((place) => {
			return (
				<div key={place.id} className='col-md-6 col-lg-4'>
					<div className='box_0'>
						<h3>{place.name}</h3>
						<img src={place.image} alt="image" height="150" />
						<h6>{place.description}</h6>
					</div>
				</div>
			);
		})
		const largeTwo = placeTwo.map((place) => {
			return (
				<div key={place.id} className='col-md-6 col-lg-4'>
					<div className='box_0'>
						<h3>{place.name}</h3>
						<img src={place.image} alt="image" height="150" />
						<h6>{place.description}</h6>
					</div>
				</div>
			)
		})
		const middleOne = placeOne.map((place) => {
			return (
				<div className='col-md-6 col-lg-4'>
					<div className='box_1'>
						<h4>{place.name}</h4>
						<img src={place.image} alt="image" height="150" />
					</div>
				</div>
			)
		})

		const middleTwo = placeTwo.map((place) => {
			return (
				<div className='row large-one box_2'>
					<div className='col-md-4'><img src={place.image} alt="image" height="110" /></div>
					<div className='col-md-8'><h4 className='pl-5'>{place.name}</h4></div>
				</div>
			)
		})

		const smallOne = placeOne.map((place) => {
			return (
				<li style={{display:"block"}}>
					<div className='row large-one box_2'>
						<div className="hover_img">
							<a>{place.name}<span><img src={place.image} alt="image" height="100" /></span></a>
						</div>
					</div>
				</li>
			)
		})
		return (
			<div className='App'>

				<Navbar color="primary">
					<div className="container center-between" id="brand">
						<NavbarBrand>React App</NavbarBrand>
						<div className='center-between'>
							<BsGithub className='nav-icon' style={{ color: "black" }} />
							<RiShoppingBasket2Line className='nav-icon' />
							<IoLogoGameControllerB className='nav-icon' />
							<BsDice3 className='nav-icon' />
						</div>
					</div>
				</Navbar>

				<div className='container'>

					<div className='row large-one'>
						{largeOne}
					</div>

					<hr className="dashed" />
					<div className='row large-one'>
						{largeTwo}
					</div>
					<hr className="dotted" />
					<div className='row large-one'>
						{middleOne}
					</div>

					<hr className="solid" />
					{middleTwo}

					<hr className="dotted" />

					<div>
						<button id="big_button" onClick={this.bigButton}>Make Big</button>	
					</div>

					<div>
						<h3>Small BreakPack</h3>
						<ul id="my_list">
							{smallOne}
						</ul>
						<ul>
							{placeOne.map((place) => {
								return (
									<li className="highlight">
										<div className='row large-one box_2'>
											<div className="hover_img">
												<a>{place.name}<span><img src={place.image} alt="image" height="100" /></span></a>
											</div>
										</div>
									</li>
								)
							})}
						</ul>
					</div>

					<hr className="rounded" />

					<NameForm />

					<hr className="solid" />

					<div id="container">
						<div id="primary-content" role="main">
							<div id="unit-kitten-content" className="unit">
								<header id="header">
									<h1>placekitten</h1>
								</header>
								<p title="It fits a gap in the market. "><strong>A quick and simple service for getting pictures of kittens for use as placeholders in your designs or code.</strong> Just put your image size (width <span className="amp">&amp;</span> height) after our URL and you'll get a&nbsp;placeholder.</p>
								<p className="links">
									Like this: <a href="/200/300">http://placekitten.com/200/300</a><br />
									or: <a href="/g/200/300">http://placekitten.com/g/200/300</a>
								</p>
								<img id="image-0" src={image008} alt="" />
							</div>
							<div id="unit-many-many-pictures-of-small-cats" className="unit">
								<img id="image-1" src={image002} alt="" />
								<img id="image-2" src={image003} alt="" />
								<img id="image-3" src={image001} alt="" />
								<img id="image-4" src={image007} alt="" />
								<img id="image-5" src={image005} alt="" />
								<img id="image-6" src={image006} alt="" />
								<img id="image-7" src={image004} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;