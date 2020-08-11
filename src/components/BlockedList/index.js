import React from 'react'
import PropTypes from 'prop-types'
import StyledBlockedList, { SettingsMenu, ClosableAvatar, BlockedAvatar, BlockedName, CloseIcon } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import 'styled-components/macro';
import Text from 'components/Text'
import { ReactComponent as closeCircle } from '../../assets/icons/closeCircle.svg'
import face from '../../assets/images/face3.jpg'

function BlockedList({ children, ...rest }) {
    return (
        <StyledBlockedList {...rest}>
            <SettingsMenu>
                <FontAwesomeIcon
                    icon={faAngleLeft}
                    css={`
                        cursor: pointer;
                        font-size: 30px;
                        color: lightgray;
                        /* display: inline-block; */
                    `}
                />
                <Text size="xxlarge">Blocked List</Text>
            </SettingsMenu>
            <ClosableAvatar>
                <BlockedAvatar size="105px" src={face} />
                <CloseIcon width={46} height={51} icon={closeCircle} />
                <BlockedName>Lok</BlockedName>
            </ClosableAvatar>
        </StyledBlockedList>
    );
}

BlockedList.propTypes = {
    children: PropTypes.any
}

export default BlockedList;

