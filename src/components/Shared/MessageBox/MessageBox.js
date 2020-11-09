import React from 'react';
import PropTypes from 'prop-types';

const MessageBox = (props) => {
    return (
        <div className='errorMessage row center'>
            {props.children}
        </div>
    )
}

MessageBox.propTypes = {
    children: PropTypes.string
}

export default MessageBox
