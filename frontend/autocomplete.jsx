import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      inputVal: e.target.value 
    })
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      inputVal: e.target.innerHTML
    })
  }
  
  render() {
    return (
      <div className="autocomplete">
        <input
        onChange={this.handleChange}
        value={this.state.inputVal}
        type="text" 
        placeholder="Enter a name"
        />
        
        <ul>
          <ReactCSSTransitionGroup 
          transitionName="auto"
          transitionEnterTimeout={420}
          transitionLeaveTimeout={404}
          >
          {
            this.props.names.map((name, idx) => {
              if (this.state.input === '' || name.includes(this.state.inputVal)) {
                return (
                <li
                  onClick={this.handleClick}
                  key={idx}>
                  {name}
                </li>)
              }
            })
            }
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    );
  }
}

export default Autocomplete;