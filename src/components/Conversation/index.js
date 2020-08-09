import React from 'react'
import PropTypes from 'prop-types'
import StyledConversation, { MyChatBubble, Conversations } from './style'
import TitleBar from 'components/TitleBar'
import ChatBubble from 'components/ChatBubble'
import Emoji from 'components/Emoji'
import Footer from 'components/Footer'
import VoiceMessage from 'components/VoiceMessage'
import face2 from '../../assets/images/face2.jpg'


function Conversation({ children, ...rest }) {
    return (
        <StyledConversation {...rest}>
            <TitleBar status="online"
                srcAvatar={face2}
                name="Leo"
                time="3h ago"
                onlineStatus="online"
            />
            <Conversations>
                <ChatBubble time="昨天 下午14：26">Hi!</ChatBubble>
                <MyChatBubble time="昨天 下午16：30">OH~ Hello!</MyChatBubble>
                <ChatBubble time="昨天 下午18：30">
                    <VoiceMessage time="01:24" />
                </ChatBubble>
                <MyChatBubble time="昨天 下午16：30">
                    How's it going?🤘
                    <Emoji label="smile">🤘</Emoji>
                </MyChatBubble>
                <ChatBubble time="昨天 下午14：26">GOOD!</ChatBubble>
            </Conversations>
            <Footer />
        </StyledConversation>
    );
}

Conversation.propTypes = {
    children: PropTypes.any,
};

export default Conversation;


