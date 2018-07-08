import React from 'react';

export class WhitelistedInstructions extends React.Component {
  render () {
    return (
      <div className="App">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Welcome</h1>
            <p>
              Thank you for participating in Shopin's Token Sale! If you are a
              member of a syndicate, contact your group for instructions on how to
              claim your new SHOPIN tokens.
            </p>
            <button onClick={this.props.checkWhitelisted}>
              Check if whitelisted
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default WhitelistedInstructions;
