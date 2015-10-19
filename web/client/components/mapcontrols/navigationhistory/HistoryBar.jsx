/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
var React = require('react');
var {ButtonGroup, Button, Glyphicon, Tooltip, OverlayTrigger} = require('react-bootstrap');


var HistoryBar = React.createClass({
    propTypes: {
        id: React.PropTypes.string,
        undoBtnProps: React.PropTypes.object,
        redoBtnProps: React.PropTypes.object
    },
    getDefaultProps() {
        return {
            id: "mapstore-historybar",
            undoBtnProps: {onClick: function() {}},
            redoBtnProps: {
                    onClick: function() {},
                    label: "puppa"
            }
        };
    },
    render() {
        let undotooltip = <Tooltip id="undo-btn">{this.props.undoBtnProps.label}</Tooltip>;
        let redotooltip = <Tooltip id="redo-btn">{this.props.redoBtnProps.label}</Tooltip>;
        return (
                <ButtonGroup id={this.props.id} bsSize="small">
                    <OverlayTrigger placement="left" key={"overlay-undo-btn"} overlay={undotooltip}>
                        <Button
                            bsStyle="default"
                            {...this.props.undoBtnProps}
                            id="undo-btn"
                            key="undo-btn">
                            <Glyphicon glyph="step-backward"/>
                        </Button>
                    </OverlayTrigger>
                    <OverlayTrigger key={"overlay-redo-btn"} overlay={redotooltip}>
                        <Button
                            bsStyle="default"
                            {...this.props.redoBtnProps}
                            id="redo-btn"
                            key="redo-btn">
                            <Glyphicon glyph="step-forward"/>
                        </Button>
                    </OverlayTrigger>
                </ButtonGroup>
        );
    }
});

module.exports = HistoryBar;
