import React, { Component } from 'react';
//import './dashboard.css';

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

				<div>{'msg: ' + this.props.data.msg.payload}</div>
				<div>{'msg Received: ' + this.props.data.msgReceived}</div>
				<div>{'control MsgReceived: ' + this.props.data.controlMsgReceived}</div>
				<div>{'msg Sent: ' + this.props.data.msgSent}</div>
				<div>{'last Msg Received: ' + this.props.data.lastMsgReceived}</div>
				<div>{'last Ctl Msg Received: ' + this.props.data.lastCtlMsgReceived}</div>
				<div>{'last Msg Sent: ' + this.props.data.lastMsgSent}</div>
				<div> bob bob bob </div>

		</div>
    );
  }
}


export default Dashboard