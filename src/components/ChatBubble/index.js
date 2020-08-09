import React from 'react'
import PropTypes from 'prop-types'
import StyledChatBubble, { Bubble, BubbleTip, Time, MessageText } from './style'

import { ReactComponent as BubbleTipIcon } from '../../assets/icons/bubbleTip.svg'

function ChatBubble({
    type,   // 定义我方还是对方发送的消息 默认为对方发送
    time,
    children,
    ...rest
}) {
    return (
        <StyledChatBubble type={type} {...rest}>
            <Bubble>
                <BubbleTip icon={BubbleTipIcon} width={40} height={28} color="white" />
                <MessageText>{children}</MessageText>
            </Bubble>
            <Time>{time}</Time>
        </StyledChatBubble>
    );
}

ChatBubble.propTypes = {
    children: PropTypes.any,
    type: PropTypes.oneOf(["mine"]),   // 定义我方还是对方发送的消息 默认为对方发送
    time: PropTypes.string,
}

export default ChatBubble;

