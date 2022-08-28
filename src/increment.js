import React from 'react';

const Increment = ({inc}) => {

    return <>
        <div className='increase-btn'>
        <button onClick={()=>inc(5)}>Add 5</button>
        </div>
    </>;
}
 
export default Increment;