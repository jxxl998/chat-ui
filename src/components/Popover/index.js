import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StyledPopover, { Content, Triangle, Target } from './style'

// offset 根据内容偏移位置
function Popover({ 
    children, 
    content, 
    offset = {}, 
    onVisible,
    onHide, 
    ...rest }) {
    const [visible, setVisible] = useState(false);      // default is hide

    const handleClick = () => {
        if (visible) {
            setVisible(false);
            onHide && onHide();
        } else {
            setVisible(true);
            onVisible && onVisible();
        }
    };

    return (
        // 相对定位
        <StyledPopover onClick={handleClick} {...rest}>
            <Content visible={visible} offset={offset}>{content}</Content>
            <Triangle visible={visible} offset={offset} />
            <Target>{children}</Target>
        </StyledPopover>
    );
}

Popover.propTypes = {
    children: PropTypes.any,
    content: PropTypes.any,
    offset: PropTypes.shape({x: PropTypes.string, y: PropTypes.string}),
    onVisible: PropTypes.func,
    onHide: PropTypes.func,
}

export default Popover;

