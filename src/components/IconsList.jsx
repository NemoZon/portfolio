import React from 'react';
import MyIcon from './UI/icons/MyIcon';

const IconsList = ({icons}) => {
    return (
        <div className="icons">
            {icons.map(elem=><MyIcon {...elem} key={elem.id} />)}
        </div>
    );
};

export default IconsList;