import React, { Component } from 'react';
import './dashboard.css';
import '/home/david/node_modules/material-design-icons/iconfont/material-icons.css'
import WaterCard from './WaterCard';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
		<div ref="root">
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
					<WaterCard current={this.props.msg}/>
				</div>
	    	</div>
		</div>
    );
  }
}


export default Dashboard