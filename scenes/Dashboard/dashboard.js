import React, { Component } from 'react';
import './dashboard.css';
import '/home/david/node_modules/material-design-icons/iconfont/material-icons.css'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
		<div ref="root"style={{height:"50vh"}}>
			<div class="MainBackground">
	  			<div class="MainTopBar">
					<div class="CardBarTitle">
						Home
					</div>
					<div class="CardBarRight">
						<i class="material-icons md-36">settings</i>
					</div>
	    		</div>
	    		<div class="CardBoardContainer">
		    		<div class="CardContainer">
	    				<div class="CardBar">
	    					<div class="CardBarTitle">
	    						Water
	    					</div>
	    					<div class="CardBarRight">
	    						<i class="material-icons md-36">settings_overscan</i>
	    					</div>
	    				</div>
	    				<div class="CardBody">
	    					<div class="CardItems">
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
		    							2.46 gal/min
		    						</div>
		    					</div>
		    				</div>
		    			</div>
	    			</div>
	    		</div>
	    	</div>
		</div>
    );
  }
}


export default Dashboard