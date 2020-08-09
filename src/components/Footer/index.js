import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StyledFooter, { IconContainer, StyledPopoverContent } from './style'
import Input from 'components/Input'
import Icon from 'components/Icon';
import { ReactComponent as ClipIcon } from '../../assets/icons/clip.svg'
import { ReactComponent as SmileIcon } from '../../assets/icons/smile.svg'
import { ReactComponent as MicrophoneIcon } from '../../assets/icons/microphone.svg'
import { ReactComponent as PlaneIcon } from '../../assets/icons/plane.svg'
import { ReactComponent as Option } from '../../assets/icons/options.svg'
import Button from 'components/Button';
import Emoji from 'components/Emoji';
import Popover from 'components/Popover';
import { useTheme } from 'styled-components';


function Footer({ children, ...rest }) {
    const [emojiIconActive, setEmojiIconActive] = useState(false);
    const theme = useTheme();
    return (
        <StyledFooter {...rest}>
            <Input
                placeholder="input message..."
                prefix={<Icon icon={ClipIcon} />}
                suffix={
                    <IconContainer>
                        <Popover
                            content={<PopoverContent />} 
                            offset={{ x: "-25%" }}
                            onVisible={() => setEmojiIconActive(true)}
                            onHide={() => setEmojiIconActive(false)}
                        >
                            <Icon
                                icon={SmileIcon}
                                color={emojiIconActive ? undefined : theme.gray3}
                            />
                        </Popover>
                        <Icon icon={MicrophoneIcon} />
                        <Button size="52px">
                            <Icon
                                icon={PlaneIcon} 
                                color="white"
                                style={{ transform: "translateX(-2px)" }}
                            />
                        </Button>
                    </IconContainer>
                }
            />
            {children}
        </StyledFooter>
    );
}

function PopoverContent(props) {
    return (
        <StyledPopoverContent>
            <Emoji label="smile">😊</Emoji>
            <Emoji label="heart">❤</Emoji>
            <Emoji label="yeah">✌</Emoji>
            <Emoji label="cat">🐈</Emoji>
            <Emoji label="cool">😎</Emoji>
            <Emoji label="ok">👌</Emoji>
            <Emoji label="strong">💪</Emoji>
            <Emoji label="thumbsup">👍</Emoji>
            <Icon icon={Option} style={{ marginLeft: "24px" }} />
        </StyledPopoverContent>
    );
}

Footer.propTypes = {
    children: PropTypes.any
}

export default Footer;

