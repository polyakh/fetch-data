import React from 'react';


export const COMPONENT_KEY = "Grid";
const Header = (props) => {
    const {as: Component = 'div', ...restProps} = props;

    return (<Component className='grid-header' role="presentation" {...restProps} >
        <div className='grid-header-inner' role="presentation">
            <table role="presentation">
                <thead role="presentation" data-keyboardnavheader="true">
                <tr role="row">
                    <th aria-sort="none" aria-colindex="1" aria-selected="false" colSpan="1" rowSpan="1"
                        className="k-header " role="columnheader"><span className="k-link">ID</span></th>
                    <th aria-sort="none" aria-colindex="2" aria-selected="false" colSpan="1" rowSpan="1"
                        className="k-header " role="columnheader"><span className="k-link">Name</span></th>
                    <th aria-sort="none" aria-colindex="3" aria-selected="false" colSpan="1" rowSpan="1"
                        className="k-header " role="columnheader"><span className="k-link">CategoryName</span></th>
                    <th aria-sort="none" aria-colindex="4" aria-selected="false" colSpan="1" rowSpan="1"
                        className="k-header " role="columnheader"><span className="k-link">Price</span></th>
                    <th aria-sort="none" aria-colindex="5" aria-selected="false" colSpan="1" rowSpan="1"
                        className="k-header " role="columnheader"><span className="k-link">In stock</span></th>
                    <th aria-sort="none" aria-colindex="6" aria-selected="false" colSpan="1" rowSpan="1"
                        className="k-header " role="columnheader"><span className="k-link">Discontinued</span></th>
                </tr>
                </thead>
            </table>
        </div>

    </Component>)
}

Header.displayName = COMPONENT_KEY;

export default Header
