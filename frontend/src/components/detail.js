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
		axios.get(`https://3000-azure-puffin-4gb5l86h.ws-us25.gitpod.io/item/`+id)
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
