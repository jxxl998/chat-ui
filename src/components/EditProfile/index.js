import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StyledEditProfile, { GroupTitle, GenderAndRegion, SelectGroup, StyledIconInput } from './style'
import Profile from 'components/Profile';
import Avatar from 'components/Avatar';
import Button from 'components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import face from '../../assets/images/face1.jpg';

import 'styled-components/macro';
import InputText from 'components/Input/InputText';
import Radio from 'components/Radio';
import LabelContainer from 'components/LabelContainer';
import Select from 'components/Select';
import Option from 'components/Option';
import Icon from 'components/Icon';
import { faWeibo, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function EditProfile({ children, ...rest }) {
    const [showEdit, setShowEdit] = useState(false);
    if (!showEdit) {
        return (
            <Profile
                onEdit={() => setShowEdit(true)}
                showEditBtn
                showCloseIcon={false}
            />
        );
    }
    return (
        <StyledEditProfile {...rest}>
            <Avatar
                src={face}
                size="160px"
                css={`
                    grid-area: 1 / 1 / 3 / 2;
                    justify-self: center;
                    margin-bottom: 12px;
                `}
            />
            <Button
                size="52px"
                css={`
                    grid-area: 1 / 1 / 3 / 2;
                    z-index: 10;
                    align-self: end;
                    justify-self: end;
                    
                `}
            >
                <FontAwesomeIcon icon={faCheck} onClick={() => setShowEdit(false)} />
            </Button>
            <GroupTitle>Basic</GroupTitle>

            <InputText label="Username" />

            <GenderAndRegion>
                <Radio.Group label="Gender">
                    <Radio name="gender">Male</Radio>
                    <Radio name="gender">Female</Radio>
                </Radio.Group>

                <LabelContainer label="Region">
                    <SelectGroup>
                        <Select type="form">
                            <Option>Province</Option>
                        </Select>
                        <Select type="form">
                            <Option>City</Option>
                        </Select>
                        <Select type="form">
                            <Option>Town</Option>
                        </Select>
                    </SelectGroup>
                </LabelContainer>
            </GenderAndRegion>

            <InputText label="Personalized Signature" />

            <GroupTitle>Contact</GroupTitle>
            <InputText label="Tel" />
            <InputText label="Email" />
            <InputText label="Website" />


            <GroupTitle>Social</GroupTitle>
            <IconInput icon={faWeibo} bgColor="#F06767" />
            <IconInput icon={faGithub} bgColor="black" />
            <IconInput icon={faLinkedin} bgColor="#2483C0" />


            
        </StyledEditProfile>
    );
}

function IconInput({ icon, bgColor, ...rest }) {
    return (
        <StyledIconInput>
            <Icon.Social icon={icon} bgColor={bgColor} />
            <InputText {...rest} />
        </StyledIconInput>
    );
}

EditProfile.propTypes = {
    children: PropTypes.any
}

export default EditProfile;
export { IconInput };
