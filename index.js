class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ""
    }
  }

  render() {
    let favoriteColorText = (
      <div>I don&apos;t know your favorite color.</div>
    );

    if (this.state.color) {
      favoriteColorText = (
        <div>
          Your favorite color is <span style={{color: this.state.color}}>{this.state.color}</span>!
        </div>
      );
    }

    return (
      <div>
        <div>
          Hello, {this.props.name}!
        </div>
        {favoriteColorText}
        <div>
          <input
            type="text"
            placeholder="Your favorite color"
            value={this.state.color}
            onChange={this.handleColorChange.bind(this)}
            />
        </div>
      </div>
    );
  }

  handleColorChange(e) {
    this.setState({
      color: e.target.value
    })
  }
}

ReactDOM.render(
  React.createElement(App, {name: "WWCode"}),
  document.getElementById("container")
)
