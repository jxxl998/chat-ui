import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StyledVideoCall, { Actions, Action, Self, Minimize, VideoCallAlert } from './style'

import face2 from '../../assets/images/face2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faMicrophone, faPhoneSlash, faVolumeMute, faVideo } from '@fortawesome/free-solid-svg-icons';

import face4 from '../../assets/images/face4.jpg';
import Avatar from 'components/Avatar';
import Paragraph from 'components/Paragraph';

import "styled-components/macro";

function VideoCall({ children, onHangOffClicked, ...rest }) {
    const [fullScreen, setFullScreen] = useState(true);

    if (!fullScreen) {
        return (
            <VideoCallAlert>
                <Avatar src={face4} css={`grid-area: avatar;`} />
                <Paragraph size="medium" css={`grid-area: info;`}>
                    talking to Leo on video...
                </Paragraph>
                <Paragraph
                    type="secondary"
                    css={`
                        grid-area: action; 
                        cursor: pointer;
                        `}
                    onClick={() => setFullScreen(true)}
                    >
                    Switch to full screen
                </Paragraph>
                <FontAwesomeIcon
                    icon={faVideo}
                    css={`
                        grid-area: icon;
                        font-size: 20px;
                        justify-self: end;
                        opacity: 0.3; 
                    `}
                />
            </VideoCallAlert>
        );
    }

    return (
        <StyledVideoCall src={face4} {...rest}>
            <Minimize shape="rect" onClick={() => setFullScreen(false)}>
                <FontAwesomeIcon icon={faCompressAlt} />
            </Minimize>

            <Actions>
                <Action>
                    <FontAwesomeIcon icon={faMicrophone} />
                </Action>
                <Action type="hangoff">
                    <FontAwesomeIcon icon={faPhoneSlash} onClick={onHangOffClicked}/>
                </Action>
                <Action>
                    <FontAwesomeIcon icon={faVolumeMute} />
                </Action>
            </Actions>
            <Self src={face2} size="140px" />
        </StyledVideoCall>
    );
}

VideoCall.propTypes = {
    children: PropTypes.any
}

export default VideoCall;

