import styled from 'styled-components';
import StyledText from 'components/Text/style';

const StyledFilter = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;

`;

// 左边的下拉菜单box 引用Text的样式 传入type
const Filters = styled.div `
${StyledText} {
        padding-right: 1rem;
    }
`;

// 右边的按钮box
const Action = styled.div `
    justify-self: center;
    ${StyledText} {
        padding-right: 1rem;
    }
`;

export default StyledFilter;
export { Filters, Action };