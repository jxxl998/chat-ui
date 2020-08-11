import React from 'react'
import PropTypes from 'prop-types'
import StyledProfile, { SocialLinks, ContactSection, AlbumSection, AlbumTitle, Album, Photo, CloseIcon } from './style'
import 'styled-components/macro'
import Avatar from 'components/Avatar'
import face from '../../assets/images/face4.jpg'
import Paragraph from 'components/Paragraph'
import Emoji from 'components/Emoji'
import Icon from 'components/Icon'
import { faWeibo } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Seperator from 'components/Seperator'
import Text from 'components/Text'
import cat1 from '../../assets/images/cat1.jpg';
import cat2 from '../../assets/images/cat2.jpg';
import cat3 from '../../assets/images/cat3.jpg';
import { ReactComponent as Cross } from '../../assets/icons/cross.svg';
import Button from 'components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'




function Profile({
    showEditBtn,
    showCloseIcon = true,
    onEdit,
    status,
    children,
    ...rest
}) {
    return (
        <StyledProfile {...rest}>
            {showCloseIcon && <CloseIcon icon={Cross} />}
            <Avatar
                css={`
                    margin: 26px 0;
                    grid-area: 1 / 1 / 3 / 2;
                `}
                src={face}
                size="160px"
                status={status}
                statusIconSize="25px"
            />
            {showEditBtn && (
                <Button
                    size="52px"
                    onClick={onEdit}
                    css={`
                        grid-area: 1 / 1 / 3 / 2;
                        align-self: end;
                        margin-left: 90px;
                        z-index: 10;
                    `}
                >
                    <FontAwesomeIcon icon={faPen} css={`font-size: 24px;`} />
                </Button>
            )}
            <Paragraph
                size="xlarge"
                css={`
                    /* margin-bottom: 12px; */
                    min-height: 28px;
                `}
            >
                Leo Lee
            </Paragraph>
            <Paragraph
                size="medium"
                type="secondary"
                css={`
                    /* margin-bottom: 18px; */
                    min-height: 28px;
                `}
            >
                Shenzhen Guangdong
            </Paragraph>
            <Paragraph
                css={`
                    /* margin-bottom: 26px; */
                    min-height: 28px;
                `}
            >
                Front End Engineer
                <Emoji label="SoftWare Engineer">👩‍💻</Emoji>
            </Paragraph>
            <SocialLinks>
                <Icon.Social
                    icon={faWeibo}
                    bgColor="#F06767"
                    href="http://weibo.com"
                />
                <Icon.Social icon={faGithub} bgColor="black" />
                <Icon.Social icon={faLinkedin} bgColor="#2483C0" />
            </SocialLinks>

            <Seperator css={`margin: 30px 0;`} />

            <ContactSection>
                <Description label="Tel"> +86 18600003212</Description>
                <Description label="Email"> leolee1998@gmail.com</Description>
                <Description label="Website"> http://github.com</Description>
            </ContactSection>

            <Seperator css={`margin: 30px 0;`} />

            <AlbumSection>
                <AlbumTitle>
                    <Text type="secondary">Gallery(3)</Text>
                    <a>Check all</a>
                </AlbumTitle>
                <Album>
                    <Photo src={cat1} />
                    <Photo src={cat2} />
                    <Photo src={cat3} />
                </Album>
            </AlbumSection>

            {children}
        </StyledProfile>
    );
}

function Description({ label, children }) {
    return (
        <Paragraph>
            <Text type="secondary">{label}:</Text>
            <Text>{children}</Text>
        </Paragraph>
    );
}

Profile.propTypes = {
    children: PropTypes.any
}

export default Profile;
export { Description };

