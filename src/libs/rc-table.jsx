/**
 * Created by shawnsandy on 6/13/15.
 */

/**
 * @jsx React.DOM
 */

/**
 *
 * @type {*|exports}
 */

import React from 'react';

/**
 * Table Rows
 */
export class Rows extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var data = this.props.data;
//
        var rows = this.props.colsTables.map(function (d, k) {
//console.log(d);
            return (
                <td key={k}>
                    {data[d]}
                </td>
            );

        })
        return (
            <tr>
                {rows}
            </tr>
        )
    }

}

Rows.PropTypes = {
    data: React.PropTypes.object.isRequired,
    colsTables: React.PropTypes.array.isRequired
}

Rows.defaultProps = {
    colsTables: []
}


/**
 * Table Header
 */

export class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var cols = this.props.cols;
        var header = cols.map(function (names, key) {

            return (
                <th key={key}>
                    {names}
                </th>
            );
        });

        return (
            <thead>
            <tr>
                {header}
            </tr>
            </thead>
        );
    }

}

Header.PropTypes = {
    cols: React.PropTypes.array.isRequired
}

Header.defaultProps = {
    cols: ['Id', 'First Name', 'Last Name']
}


/**
 * table Caption
 */

class Caption extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <caption>{ this.props.caption }</caption>
        )
    }


}

Caption.defaultProps = {
    caption: ""
}


/**
 * Table Component
 */
export class RcTable extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {

        var tr = this.props.data;
//console.log(tr[0]);
        var cols = this.props.colTables;
        var rows = tr.map(function (row, key) {
//  console.log(key);
            return (
                <Rows colsTables={cols} data={row} key={key}/>

            )
        });

        return(
            <div>
                <table className={this.props.selector} ref="dataTable">
                    <Caption caption={this.props.tableCaption}/>
                    <Header cols={this.props.cols }/>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
            </div>
        )

    }

}

RcTable.PropTypes = {
    cols: React.PropTypes.array.isRequired,
    colTables: React.PropTypes.array.isRequired,
    data: React.PropTypes.array.isRequired
}

RcTable.defaultProps = {
    data: [],
    selector: 'table table-hover',
    cols: [],
    colTables: [],
    tableCaption: ''
}


/**
 * export the element
 */
export default RcTable;