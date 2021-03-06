import styled, { css } from 'styled-components';
import Text from 'components/Text';
import Paragraph from 'components/Paragraph';
import Badge from 'components/Badge';

import { card, activeBar } from '../../utils/mixins';
import StyledAvatar from 'components/Avatar/style';

// 使用styled-components给Text组件传值
// attrs传值,省去在index中传递属性
const Name = styled(Text).attrs({ size: "large" })`
    grid-area: name;
`;

const Time = styled(Text).attrs({ size: "medium", type: "secondary" })`
    grid-area: time;
    justify-self: end;
`;

const Status = styled(Text).attrs({ type: "secondary" })`
    grid-area: status;
`;

// 消息容器
const Message = styled.div`
    grid-area: message;
    display: grid;
    grid-template-columns: 1fr 30px;    
    /* 消息容器内分为2列，消息文本为浮动宽度，30px表示未读数 */
    align-items: center;
    ${({ replied }) =>
        replied &&
        css`
            grid-template-columns: 24px 1fr 30px;
        `
    }
`;

const MessageText = styled(Paragraph).attrs({ ellipsis: true })``;

const UnreadBadge = styled(Badge)`
    justify-self: end;
`;


const StyledMessageCard = styled.div`
    ${card()};
    display: grid;
    grid-template-areas:
        "avatar name time"
        "avatar status status"
        "message message message";
    grid-template-columns: 64px 1fr 1fr;
    row-gap: 16px;
    background: ${({ theme }) => theme.background};
    &::hover {
        box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.1);
    }; 
    
    ${StyledAvatar} {
        grid-area: avatar;
    };
    
    ${({ active }) =>
        active &&
        css`
      background: ${({ theme }) => theme.darkPurple};
      ${Name}, ${Status}, ${Time}, ${MessageText} {
        color: white;
      }
      ${Status}, ${Time} {
        opacity: 0.4;
      }
      ${activeBar({ barWidth: "4px", shadowWidth: "14px" })}

      /* 隐藏指示条露在外边的部分 */
      overflow: hidden;`}
`;

export default StyledMessageCard;
export { Name, Time, Status, Message, MessageText, UnreadBadge };