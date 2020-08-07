import React from 'react'
import PropTypes from 'prop-types'
import StyledTitleBar, { Title, Actions } from './style'
import Avatar from 'components/Avatar'
import Paragraph from 'components/Paragraph'
import Text from 'components/Text'

import { faPhone, faVideo, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TitleBar({
    status,
    srcAvatar,
    name,
    time,
    onlineStatus,
    children,
    ...rest
}) {
    return (
        <StyledTitleBar {...rest}>
            <Avatar status={status} src={srcAvatar} />
            <Title>
                <Paragraph size="large">{name}</Paragraph>
                <Paragraph type="secondary">
                    <Text>{onlineStatus}</Text>
                    <Text>last online time: {time}</Text>
                </Paragraph>
            </Title>

            <Actions>
                <FontAwesomeIcon icon={faPhone} style={{opacity:"0.2", fontSize:"24px"}} />
                <FontAwesomeIcon icon={faVideo} style={{opacity:"0.2", fontSize:"24px"}} />
                <FontAwesomeIcon icon={faEllipsisH} style={{opacity:"0.2", fontSize:"24px"}} />
            </Actions>
        </StyledTitleBar>
    );
}

TitleBar.propTypes = {
    children: PropTypes.any
}

export default TitleBar;

