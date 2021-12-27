import React from 'react';
import { Media } from 'reactstrap';
import './media.css';

import image001 from "../assets/001.jfif";
import image002 from "../assets/002.jfif";
import image003 from "../assets/003.jfif";
import image004 from "../assets/004.jfif";
import image005 from "../assets/005.jfif";
import image006 from "../assets/006.jfif";
import image007 from "../assets/007.jfif";
import image008 from "../assets/008.jfif";

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

// 'Keys' - It helps identify which items have changed, are added or removed.


export default Menu;