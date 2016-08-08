class App extends React.Component {
  render() {
    return (
      <div>
        Hello, {this.props.name}!
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(App, {name: "WWCode"}),
  document.getElementById("container")
)
