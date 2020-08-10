import React from 'react'
import PropTypes from 'prop-types'
import StyledInputText, { InputUnderline } from './style'
import LabelContainer from 'components/LabelContainer';

function InputText({ label, placeholder = "Type info", ...rest }) {
    const input = <InputUnderline type="text" placeholder={placeholder} />;
    return (
        <StyledInputText {...rest}>
        {/* 如果这个组件有传进来label标签，则显示带label的输入文本框，否则只是显示一个输入文本框 */}
            {label ? <LabelContainer label={label}>{input}</LabelContainer> : input}
        </StyledInputText>
    );
}

InputText.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string
}

export default InputText;

