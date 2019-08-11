import React, { Component } from 'react';
import './dashboard.css';
import '/home/david/node_modules/material-design-icons/iconfont/material-icons.css'
import HorizBarGraph from './HorizBarGraph';
import CardHeader from './CardHeader';

class WaterCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
		<div class="CardContainer">
			<CardHeader title="Water"/>
			<div class="CardBody">
				<div class="CardItems" style={{width: "75%"}}>
					<div class="CardItem">
						<div class="CardBodyTextCentered">
							usage till now
						</div>
						<div class="CardBodyTextHighlightCentered">
							18.4 gallons
						</div>
					</div>
					<div class="CardItem">
						<div class="CardBodyTextCentered">
							current usage
						</div>
						<div class="CardBodyTextHighlightCentered">
							{this.props.current} gal/min
						</div>
					</div>
				</div>
			</div>
			<HorizBarGraph units="gallons" today={80} yesterday={100} average={60}/>
		</div>
    );
  }
}


export default WaterCard