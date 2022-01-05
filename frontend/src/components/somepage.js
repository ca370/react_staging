import '../App.css';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import {
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
		axios.get(`https://3000-amber-hedgehog-usxt1b8q.ws-us25.gitpod.io/items`)
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
			.then((response)=>{
                console.log(response)
                if(response.status==200)
                    this.callAPIOne()
            });
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
    goDetail(){
    }

	render() {
		let {placeOne} = this.state
		const largeOne = placeOne.map((place) => {
			return (
				<div key={place.id}>
                    <img src={place.image}></img>
                    <div><Link to={"/?id="+place.id}>Detail</Link></div>
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
                    <hr class="dashed" style={{width:"50%"}}></hr>
				</div>
			);
		})
		return (
			<div className='App'>
				<div className='container'>
				<div className='large_title'>FreeCycle</div>
				<div className='middle_title'>New Item</div>
				<form className="form" onSubmit={(e) => this.submitForm(e)}>
					<label htmlFor="lname">User name:</label>
					<input type="name" id="aname" name="name" onChange={this.handleChange}/><br/>
					<label htmlFor="lname">Latitude:</label>
					<input type="number" step="any" id="bname" name="latitude" onChange={this.handleChange}/><br/>
					<label htmlFor="lname">Longitude:</label>
					<input type="number" step="any" id="cname" name="longitude" onChange={this.handleChange}/><br/>
					<label htmlFor="lname">Image:</label>
					<input type="text" id="dname" name="image" onChange={this.handleChange}/><br/>
					<label htmlFor="lname">keyword:</label>
					<input type="text" id="keyword" name="keyword" onChange={this.handleChange}/><br/>
					<label htmlFor="lname">Description:</label>
					<textarea type="textarea" id="ename" name="description" onChange={this.handleChange}/><br/>
					<Button>Submit</Button>
				</form>
				<div>
					<p className='middle_title'>Items</p>
					{largeOne}
				</div>
				</div>
			</div>
		);
	}
}

export default App;
