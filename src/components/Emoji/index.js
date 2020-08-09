import React from 'react'
import PropTypes from 'prop-types'
import StyledEmoji from './style'

// emoji通过children传递进来
function Emoji({children, label, ...rest}) {
    return (
        <StyledEmoji aria-label={label} role="img" {...rest}>
          {children}    
        </StyledEmoji>
    );
}

Emoji.propTypes = {
    children: PropTypes.any,
    label: PropTypes.string,
}

export default Emoji;

