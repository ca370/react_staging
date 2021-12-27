import React from 'react';
import { Media } from 'reactstrap';
import './media.css';
import image002 from "../assets/002.jfif";

class Menu extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}
	
	render(){
		const menu = this.props.places.map((place) => {
			return(
				<div key={place.id} id="unit" className="col-12 mt-5">					
					<div className='row'>
						<div className='col-md-3 center-center'>
							<img id="image-1"  src={image002} alt=""/>	
						</div>
						<div body className="pl-3 col-md-9 pt-1 pb-1">
							<Media heading><strong>{place.name}</strong></Media>
							<div><strong>Location Type - </strong>{place.category}</div>
							<div><strong>Info - </strong>{place.description}</div>
							<div><strong>Info source - </strong>{place.source}</div>
						</div>
					</div>
				</div>
			);
		});
		
		return(
			<div className="container">
				<div className="row">
					<div>
						{menu}
					</div>
				</div>
			</div>
		);
	}
}

export default Menu;