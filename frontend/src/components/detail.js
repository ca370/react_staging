import '../App.css';
import React from 'react';
import axios from 'axios';
import querySearch from "stringquery";

import {
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Label,
  Input,
  Button,
} from 'reactstrap';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			placeOne: [],
			placeTwo: [],
			name:"",
			latitude:0.0,
			longitude:0.0,
			image:"",
			description:"",
			keyword:[]
		};
	}

	callAPIOne() {
        
        const queryParams = new URLSearchParams(window.location.search);
        const id = queryParams.get('id');
        console.log("window.location.search.id:",id)
		axios.get(`https://3000-amber-hedgehog-usxt1b8q.ws-us25.gitpod.io/item/`+id)
			.then(res => {
				const places = res.data;
				this.setState({
					placeOne: places.data
				})
			})
	}
	componentWillMount() {
        
        
		this.callAPIOne();
	}

	submitForm(e) {
		let {name,latitude,longitude,image,description,keyword} = this.state
		e.preventDefault();
		const headers = {
			'Content-Type': 'application/json',
		  }
		console.log(`Email: ${this.state.name}`);
		const article = { 
			user_id: name,
			lat:latitude,
			lon:longitude,
			image:image,
			description:description,
			keyword:keyword };
			axios.post('https://3000-amber-hedgehog-usxt1b8q.ws-us25.gitpod.io/item/', article, {
				headers: headers
			  })
			.then(response => console.log(response));
	}

  handleChange = (event) => {
	const { target } = event;
	target.name == 'name' ? this.setState({
		name:target.value
	}):target.name == 'latitude' ? this.setState({
		latitude:target.value
	}):target.name == 'longitude' ? this.setState({
		longitude:target.value
	}):target.name == 'image' ? this.setState({
		image:target.value
	}):target.name == 'keyword' ? this.setState({
		keyword:target.value.split(",")
	}):this.setState({
		description:target.value
	})
	}

	render() {
		let {placeOne} = this.state
        let place=placeOne
		const largeOne = 
			(
				<div>
                    <img src={place.image}></img>
                    <div>
                        username:{place.user_id}
                    </div>
                    <div>
                        Latitude:{place.lat}
                    </div>
                    <div>
                        Longitude:{place.lon}
                    </div>
                    <div>
                        Description:{place.description}
                    </div>
				</div>
			);
		
		return (
			<div className='App'>
				<div className='container'>
					<p>Detail Data</p>
					{largeOne}
				</div>
			</div>
		);
	}
}

export default App;
