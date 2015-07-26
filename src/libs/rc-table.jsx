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
 * Table Caption
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
 * Table Rows
 */
export class Rows extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var data = this.props.data;
       // console.log(data);

//
        var rows = this.props.colsTables.map(function (d, k) {

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
    colsTables: [],
    data: []
}


/**
 * Table Elements
 */

export class TableBody extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        var cols = this.props.colTables;
        console.log(cols);
        var data = this.props.data;

        var rows = data.map(function (row, key) {
            return (
                <Rows colsTables={cols} data={row} key={key} />
            )
        });

        return (
            <tbody>
            {rows}
            </tbody>
        )
    }

}

TableBody.PropTypes = {
    colTables: React.PropTypes.array.isRequired,
    data: React.PropTypes.array.isRequired
}

TableBody.defaultProps = {
    data: [],
    colTables: [],
    cols: []
}



/**
 * Table Component
 */
export class RcTable extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {


        var cols = this.props.colTables;


        return(

                <table className={this.props.selector} ref="dataTable">
                    <Caption caption={this.props.tableCaption}/>
                    <Header cols={this.props.cols }/>
                    <TableBody data={this.props.data} colTables={this.props.colTables}  />
                </table>

        )

    }

}


RcTable.defaultProps = {
    selector: 'table table-hover',
    tableCaption: '',
    colTables: []
}


TableBody.defaultProps = {
    data: [],
    colTables: []

}

