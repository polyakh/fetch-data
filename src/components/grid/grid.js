import React from 'react';


export const COMPONENT_KEY = "Grid";
const Grid = (props) => {
    const {as: Component = 'div'} = props;

    return (<Component role='grid'>
        Grid
    </Component>)
}

Grid.displayName = COMPONENT_KEY;

export default Grid
