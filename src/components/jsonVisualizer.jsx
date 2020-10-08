import "./jsonVisualizer.scss";
import React, {Fragment} from "react";
import classNames from "classnames";
import _ from "lodash";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import {TABLE_ARRAY_OBJECT, toView} from './jsonVisualizerUtil';

const VIEW_JSON = 'vj';
const VIEW_TABLE = 'vt';

const formatPrimitiveForJson = value =>
  value === null ? 'null'
    : value === undefined ? 'undefined'
    : JSON.stringify(value)

const formatPrimitiveForTable = value =>
  value === null ? 'null'
    : value === undefined ? 'undefined'
    : value === false ? 'false'
      : value === true ? 'true '
        : value

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
    ]).isRequired,
    defaultView: PropTypes.oneOf(VIEW_JSON, VIEW_TABLE)
  },

  getInitialState() {
    return {
      collapsed: true,
      view: this.props.defaultView || VIEW_JSON,
      copying: false
    };
  },

  toggle(event) {
    // The custom scroll component catches our click as well
    // and sometimes updates the scroll position to the wrong one
    //https://github.com/rommguy/react-custom-scroll/issues/42
    event.stopPropagation();
    this.setState({ collapsed: !this.state.collapsed });
  },

  copy() {
    if (this.state.view === VIEW_JSON)
      navigator.clipboard.writeText(JSON.stringify(this.props.value, undefined, 2))
    else {
      let tableToCopy = toView(this.props.value).map(view => {
        return view.matrix.map(line => {
          return line.map(value => !_.isObject(value)?formatPrimitiveForTable(value):JSON.stringify(value)).join('\t')
        }).join('\n')
      }).join('\n')
      navigator.clipboard.writeText(tableToCopy)
    }
    this.setState({copying: true})
    setTimeout(() => {
      this.setState({copying: false})
    }, 2500)
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

    const isLabelCell = (view, row, column) => {
      return (column === 0) ||
      (view.view === TABLE_ARRAY_OBJECT && row === 0)
    }

    const JsonTree = this.getJsonTreeClass();

    return (
      <div className="wix-code-json-visualizer">
        <div
          onClick={this.toggle}
          className={classNames({
            root: true,
            clickable: _.isObject(this.props.value),
            "non-clickable-label": !_.isObject(this.props.value) && this.props.label,
            "non-clickable-no-label": !_.isObject(this.props.value) && !this.props.label
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
              {formatPrimitiveForJson(this.props.value)}
            </span>
          )}
        </div>
        {!this.state.collapsed && _.isObject(this.props.value) && <Fragment>
          <div className='view'>
            <span className={classNames({tab: true, selected: this.state.view === VIEW_JSON})} onClick={ev => this.changeView(ev, VIEW_JSON)}>json</span>
            <span className={classNames({tab: true, selected: this.state.view === VIEW_TABLE})} onClick={ev => this.changeView(ev, VIEW_TABLE)}>table</span>
            <span className="copy" onClick={ev => this.copy(ev)}>{this.state.copying?"copied!":this.state.view === VIEW_JSON?"copy json":"copy table"}</span>
          </div>
          {this.state.view ===VIEW_JSON?(
            <div key="json-children" className="values">
              {Object.entries(this.props.value).map(pair => (
                <JsonTree label={pair[0]} value={pair[1]} key={pair[0]} />
              ))}
            </div>
          ):(<div>
            {toView(this.props.value).map((view, index) => (
              <table key={`json-table-${index}`}>
                <tbody>
                {view.matrix.map((line, lineIndex) => (
                  <tr key={`line-${lineIndex}`}>
                    {line.map((cell, cellIndex) => (
                      <td key={`cell-${lineIndex}-${cellIndex}`}>{!_.isObject(cell)
                        ? <span className={classNames({
                          "cell-value": true,
                          "label-cell": isLabelCell(view, lineIndex, cellIndex)})}>{formatPrimitiveForTable(cell)}</span>
                        : <JsonTree value={cell} defaultView={VIEW_TABLE}/>
                      }</td>
                    ))}
                  </tr>
                ))}
                </tbody>
              </table>
            ))}
          </div>)}
        </Fragment>}

      </div>
    );
  }
});

export default JsonTree;
