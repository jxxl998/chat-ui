import React from 'react'
import PropTypes from 'prop-types'
import StyledMessageCard, { Name, Status, Time, Message, MessageText, UnreadBadge } from './style'
import Avatar from 'components/Avatar'

function MessageCard({
    avatarSrc,
    avatarStatus,
    statusText,
    name,
    time,
    message,
    unreadCount,
    active,
    replied,
    children,
    ...rest
}) {
    return (
        <StyledMessageCard {...rest}>
            <Avatar status={avatarStatus} src={avatarSrc} />
            <Name>{name}</Name>
            <Status>{statusText}</Status>
            <Time>{time}</Time>
            <Message>
                <MessageText>{message}</MessageText>
                <UnreadBadge count={unreadCount} />
            </Message>
        </StyledMessageCard>
    );
}

MessageCard.propTypes = {
    avatarSrc: PropTypes.string.isRequired,
    statusText: PropTypes.any,
    name: PropTypes.any,
    time: PropTypes.any,
    message: PropTypes.any,
    unreadCount: PropTypes.number,
    active: PropTypes.bool,
    replied: PropTypes.bool,
    children: PropTypes.any,
}

export default MessageCard;

