import _ from 'lodash'
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    return _.round(_.sum(data)/data.length);
}


export default function Chart(props) {
    return (
        <div>
            <Sparklines height={90} width={120} data={props.data} >
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="mean" />
            </Sparklines>
            <div>{ average(props.data) } { props.units }</div>
        </div>
    );
}