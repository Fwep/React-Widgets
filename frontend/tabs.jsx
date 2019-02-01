import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTabIdx: 0,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(idx, e) {
    this.setState({selectedTabIdx: idx})
  }

  render() {

    return (
      <div className="tabs-widget">
        <ul className="tab-header">
          {
            this.props.tabs.map((tab, idx) => {
              return <h1 className="tab" onClick={(e) => this.handleClick(idx, e)} key={idx}>{tab.title}</h1>;
            })
          }
        </ul>
        <article className="tab-content">{this.props.tabs[this.state.selectedTabIdx].content}</article>
      </div>
    );
  }
}

export default Tabs;