import styled from 'styled-components';
import StyledText from 'components/Text/style';

const Title = styled.div`
    display: grid;
    ${StyledText} {
        padding-right: 10px;
    };
    
`;

const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;

`;


const StyledTitleBar = styled.div`
    display: grid;
    grid-template-columns: 62px 1fr 112px;
    padding: 30px;
    max-height: 110px;
    border-bottom: 1px solid ${({ theme }) => theme.gray4};
`;

export default StyledTitleBar;
export { Title, Actions };