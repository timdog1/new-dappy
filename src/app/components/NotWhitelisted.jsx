import React from 'react'

export class WhitelistedInstructions extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Welcome</h1>
            <p>
              Thank you for participating in Shopin's Token Swap. If you are an
              investor, your syndicate lead will share a unique link that you
              can use to claim your new SHOPIN tokens.
            </p>
            <pre><code>{this.props.accounts[0]}</code></pre>
            <div className="pure-u-1-1">
              <button className="pure-button" onClick={this.props.checkWhitelisted}>Check again</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WhitelistedInstructions
