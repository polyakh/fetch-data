import React from 'react';


export const COMPONENT_KEY = "Grid";
const Grid = (props) => {
    const {as: Component = 'div'} = props;

    return (<Component role='grid'>
        <div className="grid-container" role="presentation">
            <div className="grid-content k-virtual-content" role="presentation">
                <div role="presentation">
                    <table tabIndex="-1" className="k-grid-table" role="presentation">
                        <colgroup role="presentation">
                            <col width="40px"/>
                            <col width="250px"/>
                            <col/>
                            <col/>
                            <col/>
                            <col/>
                        </colgroup>
                        <tbody role="presentation" data-keyboardnavbody="true">
                        <tr className="k-master-row" role="row">
                            <td colSpan="1" className="" role="gridcell" aria-colindex="1" aria-selected="false">1</td>
                            <td colSpan="1" className="" role="gridcell" aria-colindex="2" aria-selected="false">Chai
                            </td>
                            <td colSpan="1" className="" role="gridcell" aria-colindex="3"
                                aria-selected="false">Beverages
                            </td>
                            <td colSpan="1" className="" role="gridcell" aria-colindex="4" aria-selected="false">18</td>
                            <td colSpan="1" className="" role="gridcell" aria-colindex="5" aria-selected="false">39</td>
                            <td><input disabled="" type="checkbox"/></td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </Component>)
}

Grid.displayName = COMPONENT_KEY;

export default Grid
