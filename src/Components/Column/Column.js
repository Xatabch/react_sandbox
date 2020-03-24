import React from 'react';
import classnames from 'classnames';
import './Column.css';

export function Column(props) {
    return (
        <div className={classnames({
            'timeline_column': true, 
            'timeline_column_active': props.isActive
        })}>{props.num}</div>
    )
}