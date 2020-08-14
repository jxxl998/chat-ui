import React from 'react'
import PropTypes from 'prop-types'
import StyledContactCard, { Name, Intro } from './style'
import Avatar from 'components/Avatar'
import face from '../../assets/images/face4.jpg';

function ContactCard({children, ...rest}) {
    return (
        <StyledContactCard {...rest}>
            <Avatar src={face} status="online" />
            <Name>Leo</Name>
            <Intro>No Pain No Gain.</Intro>
          {children}
        </StyledContactCard>
    );
}

ContactCard.propTypes = {
    children: PropTypes.any
}

export default ContactCard;

