import React from 'react'
import PropTypes from 'prop-types'
import StyledInput, { InputContainer, Prefix, Suffix } from './style'
import Icon from 'components/Icon';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { useTheme } from 'styled-components';
import InputText from './InputText';

function Input({
    placeholder = "请输入内容...",
    prefix,
    suffix,
    ...rest
}) {
    return (
        <InputContainer {...rest}>
            {prefix && <Prefix>{prefix}</Prefix>}
            <StyledInput placeholder={placeholder}></StyledInput>
            {suffix && <Suffix>{suffix}</Suffix>}
        </InputContainer>
    );
}

// 搜索框中的placeholder都是显示该内容，可以省去反复修改，之后传进来的的placeholder可以覆盖掉默认的
// 支持自定义
function Search({ placeholder = "请输入搜索内容：", ...rest }) {
    const theme = useTheme();
    return (
        <Input
            placeholder={placeholder}
            prefix={
                <Icon
                    icon={SearchIcon}
                    width={18}
                    height={18}
                    color={theme.gray3} />
            }
            {...rest}
        />
    );
}

// 把Search以及InputText作为Input的子组件
Input.Search = Search;
Input.Text = InputText;

Input.propTypes = {
    placeholder: PropTypes.string,
    prefix: PropTypes.any,
    suffix: PropTypes.any,
}

export default Input;

