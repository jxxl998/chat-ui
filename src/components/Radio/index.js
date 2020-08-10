import React from 'react'
import PropTypes from 'prop-types'
import StyledRadio, { RadioButton, Circle, StyledRadioGroup } from './style'
import LabelContainer from 'components/LabelContainer';

function Radio({ children, name, ...rest }) {
    return (
        <StyledRadio {...rest}>
            {children}
            <RadioButton name={name} />
            <Circle />
        </StyledRadio>
    );
}

function RadioGroup({ label, children, ...rest }) {
    return (
        <LabelContainer label={label}>
            <StyledRadioGroup {...rest}>{children}</StyledRadioGroup>
        </LabelContainer>
    );
}

Radio.Group = RadioGroup;

Radio.propTypes = {
    children: PropTypes.any,
    name: PropTypes.string,

}

RadioGroup.propTypes = {
    label: PropTypes.string,
    children: PropTypes.any,
}

export default Radio;

