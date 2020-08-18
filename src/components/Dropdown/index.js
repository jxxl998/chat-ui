import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StyledDropdown, { DropdownItem, DropdownContainer } from './style'

function Dropdown({ children, content, align = "right", ...rest }) {
    const [visible, setVisible] = useState(false);
    return (
        <StyledDropdown {...rest} onClick={() => setVisible(!visible)}>
            {children}
            {content && (
                <DropdownContainer align={align} visible={visible} >{content}</DropdownContainer>
            )}
        </StyledDropdown>
    );
}

Dropdown.propTypes = {
    children: PropTypes.any,
    content: PropTypes.any,
    align: PropTypes.oneOf(["top", "bottom", "left", "right"])
}

export default Dropdown;

