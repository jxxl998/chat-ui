import React from 'react'
// import PropTypes from 'prop-types'
// import face1 from '../../assets/images/face1.jpg'
import StyledAvatar, { StatusIcon, AvatarImage, AvatarClip } from './style'



// ...rest 即把剩下的属性留给外标签接收
function Avatar({
    src,
    size = "48px",
    status,
    statusIconSize = "8px",
    ...rest
}) {
    return (
        <StyledAvatar {...rest}>
            {status && (
                <StatusIcon status={status} size={statusIconSize}></StatusIcon>
            )}
            <AvatarClip size={size}>
                <AvatarImage src={src} alt="" />
            </AvatarClip>
        </StyledAvatar>
    );
}

// Avatar.propTypes = {

// }

export default Avatar

