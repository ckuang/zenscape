<script src="https://fb.me/react-0.14.2.js"></script>
<script src="https://fb.me/react-dom-0.14.2.js"></script>

// #1 - ReactDOM
// Links React to HTML

//          ReactDOM.render(reactElement, domNode)


//          React.createElement(
//            string/ReactClass type,
//            [object props],
//            [children ...])




ReactDOM.render(
    React.createElement('div', {}, 'Hello World!'),
    document.getElementById('content')
);















// Cool Way
ReactDOM.render(
    <div className="GoT">Winter is Coming.</div>,
    document.body
);

// Uncool Way
ReactDOM.render(
  React.createElement(
    'div',
    { className: 'GoT' },
    'Winter is Coming.'
  ),
  document.body
);





// #2 - React.createClass
// React components HAVE TO HAVE a render function
// render has return one root element
const powerTwo = React.createClass({
  render: function() {
    return (
    React.createElement('div', {},
      React.createElement(
        'button',
        {},
        "click"
      )
    )
   );
  }
});

// #3 - ReactDOM & React.createClass
//in this example, the ReactElement is a React Class
ReactDOM.render(
  React.createElement(powerTwo, {}, ""),
  document.getElementById('content')
);


//#4 - State
// the state of a React component stores
// data that can be accessed in the
// render function
const powerTwo = React.createClass({
  getInitialState() {
    return {power: 0, result: 1};
  },
  render() {
    return (
      React.createElement('div', {},
        React.createElement(
          'button',
          {},
          "click"
        ),
        '     ',
        React.createElement('span', {}, this.state.power, ' => ', this.state.result)
      )
    );
  }
});


// #5 - Rerender
// whenever you call the setState function
// it triggers a re-render
const powerTwo = React.createClass({
  getInitialState() {
    return {power: 0, result: 1};
  },
  click(event) {
    event.preventDefault();
    this.setState({
      power: this.state.power + 1,
      result: this.state.result * 2});
  },
  render() {
    return (
    React.createElement('div', {},
      React.createElement(
        'button',
        { onClick: this.click },
        "click"
      ),
      '        ',
      React.createElement('span', {}, this.state.power, ' => ', this.state.result)
    )
   );
  }
});

// #6 - JSX
// Javascript & HTML combined
// cleaner, shorter, more intuitive

const pokemon =
  <Starters>
    <genOne>
      <Starter>Bulbasaur</Starter>
      <Starter>Charmander</Starter>
      <Starter>Squirtle</Starter>
    </genOne>
    <genTwo>
      <Starter>Chikorita</Starter>
      <Starter>Cyndaquil</Starter>
      <Starter>Totodile</Starter>
    </genTwo>
  </Starters>


// #7 - "Interpolation"
render() {
  return(
    <div className={ myClass } onClick={ clickHandler }>
      { contents }
    </div>
  )
}
----------------------------
React.createElement("div",
  {
    className: myClass,
    onClick: clickHandler
  },
  contents
)

// #8 - More usages of JSX
render() {
  if (typeof starter === 'undefined') {
    starter = "pikachu"
  }

  return <div> {starter} </div>
}
----------------------------
<ul>
  {
    items.map( item => <li key={ item.id }>{ item.name }</li>;
    })
  }
</ul>

// #9 - Use JSX!!!
// the old way
render() {
  return (
    React.createElement('div', {},
    React.createElement(
      'button',
      { onClick: this.click },
      "click"
    ),
    React.createElement('span', {}, this.state.count)
  )
);
}
----------------------------
// the new way
  render() {
    return (
      <div>
        <button onClick={this.click}>CLICK ME</button>
        <span>{this.state.count}</span>
      </div>
    );
  }
});

// #10 - Onto the tutorial
.comment {
  border: 8px solid blue;
}

.commentBox {
  border: 8px solid red;
}

.commentList {
  border: 8px solid green;
}

.commentForm {
  border: 8px solid rebeccapurple;
}

// #11 - ZenScape
Use window.localStorage!!! to store info
1 point - display how many todos left
1 point - display each todo
1 point - POST todo
1 point - DELETE todo
1 point - checkbox => linethrough
