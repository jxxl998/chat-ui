import React, { Component } from 'react';

import styled from 'styled-components';

const StyledButton = styled.div`
    height: 100px;
    width: 100px;
    background-color: #2ed573;
    border: 1px solid #000;
`;

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        let { label } = this.props;
        let { children } = this.props;
        return (
            <StyledButton onClick={this.props.onClick}>
                <button>{label}</button>
                {children}
            </StyledButton>
        );
    }
}

export default Button;