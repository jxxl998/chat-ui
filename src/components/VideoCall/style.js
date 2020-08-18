import styled from 'styled-components';
import Button from 'components/Button';
import Avatar from 'components/Avatar';
import { card } from 'utils/mixins';

const Actions = styled.div`
    grid-area: actions / title;
    align-self: end;
    justify-self: center;

    display: grid;
    grid-template-columns: 90px 90px 90px;
`;

const Action = styled(Button).attrs({ size: "64px" })`
    /* margin: 0 10px; */
    font-size: 32px;
    color: white;

    box-shadow: none;
    background: ${({ theme, type }) =>
        type === "hangoff" ? theme.red2 : theme.grayDark2
    };
`;

const Self = styled(Avatar)`
    grid-area: self;
    align-self: end;
    justify-self: end;
`;

const Minimize = styled(Button)`
    grid-area: title;
    justify-self: end;
    background-color: ${({ theme }) => theme.gray3};
    padding: 0;
    width: 62px;
    height: 62px;
    font-size: 40px;
`;

const VideoCallAlert = styled.div`
     display: grid;
     grid-template-areas: 
        "avatar info info"
        "avatar action icon";
    row-gap: 5px;
    column-gap: 10px;
    align-items: center;
    width: max-content;
    position: absolute;
    right: 0;
    top: 10vh;
    border: 1px solid ${({theme})=>theme.gray4};
    z-index: 200;
    ${card};
`;

const StyledVideoCall = styled.div`
    height: 100%;
    padding: 20px;
    padding-bottom: 40px;
    background-image: url(${({ src }) => src});
    /* background-size: auto 100%; */
    /* 自动等比例拉伸图片 */
    background-size: cover;
    background-repeat:no-repeat;
    background-position: center;
    

    display: grid;
    grid-template-areas: 
        "title title"
        "actions self";
`;

export default StyledVideoCall;
export { Actions, Action, Self, Minimize, VideoCallAlert };