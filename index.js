class App extends React.Component {
  render() {
    return (
      <div>
        <i>Hello,</i> from inside an ES6 React Class!
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("container")
)
