class Message extends React.Component {
constructor() {
  super()
  this.state = {
    messageIsActive: false
  }
  this.handleMessageButton = this.handleMessageButton.bind(this)
}

handleMessageButton() {
  
  this.setState({
    messageIsActive: !this.state.messageIsActive
  })
}

  render() {
    console.log(this.state.messageIsActive)
    const text = 'Lorem ipsum dolor sit amet,consectetur adipisicing elit.Vitae qui asperiores rem amet nulla fugiat ipsum inventore saepe minus similique.'
    return (
      <>
        <button onClick={this.handleMessageButton}>
        {this.state.messageIsActive ? 'Ukryj' : 'Pokaż'}</button>
        {/* {this.state.messageIsActive ?  <p>{text}</p>: null} */}
      {this.state.messageIsActive && <p>{text}</p>}
      </>
    )
  }

}

ReactDOM.render(<Message />, document.getElementById('root'))
//<p>{this.state.messageIsActive && text}</p>