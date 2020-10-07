import "./jsonVisualizer.scss";
import React from "react";
import classNames from "classnames";
import _ from "lodash";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";

const VIEW_JSON = 'vj';
const VIEW_TABLE = 'vt';

const JsonTree = createReactClass({
  displayName: "JsonTree",

  propTypes: {
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.oneOf([null])
    ]).isRequired
  },

  getInitialState() {
    return {
      collapsed: true,
      view: VIEW_JSON
    };
  },

  toggle(event) {
    // The custom scroll component catches our click as well
    // and sometimes updates the scroll position to the wrong one
    //https://github.com/rommguy/react-custom-scroll/issues/42
    event.stopPropagation();
    this.setState({ collapsed: !this.state.collapsed });
  },

  changeView(event, view) {
    // The custom scroll component catches our click as well
    // and sometimes updates the scroll position to the wrong one
    //https://github.com/rommguy/react-custom-scroll/issues/42
    event.stopPropagation();
    this.setState({ view });
  },

  getJsonTreeClass() {
    return JsonTree;
  },

  render() {
    const JsonTree = this.getJsonTreeClass();

    return (
      <div className="wix-code-json-visualizer">
        <div
          onClick={this.toggle}
          className={classNames({
            root: true,
            clickable: _.isObject(this.props.value)
          })}
        >
          <div
            className={classNames({
              arrow: true,
              "arrow-collapsed": this.state.collapsed,
              transparent: !_.isObject(this.props.value)
            })}
          />

          <div className="label">
            {_.isUndefined(this.props.label) ? "" : `${this.props.label}: `}
          </div>

          {_.isArray(this.props.value) && (
            <div key="array-value" className="preview-expandable">
              {this.state.collapsed
                ? "[...]"
                : `Array(${this.props.value.length})`}
            </div>
          )}
          {_.isPlainObject(this.props.value) && (
            <div key="object-value" className="preview-expandable">
              {"{...}"}
            </div>
          )}
          {!_.isObject(this.props.value) && (
            <span key="primitive-value" className="preview-value">
              {this.props.value === "null"
                ? "null"
                : JSON.stringify(this.props.value)}
            </span>
          )}
        </div>
        {!this.state.collapsed && _.isObject(this.props.value) && (
          <div className='view'>
            <span className={classNames({tab: true, selected: this.state.view === VIEW_JSON})} onClick={ev => this.changeView(ev, VIEW_JSON)}>json</span>
            <span className={classNames({tab: true, selected: this.state.view === VIEW_TABLE})} onClick={ev => this.changeView(ev, VIEW_TABLE)}>table</span>
          </div>
        )}


        {!this.state.collapsed && _.isObject(this.props.value) && (
          <div key="json-children" className="values">
            {Object.entries(this.props.value).map(pair => (
              <JsonTree label={pair[0]} value={pair[1]} key={pair[0]} />
            ))}
          </div>
        )}
      </div>
    );
  }
});

export default JsonTree;
