import React from 'react'
// import PropTypes from 'prop-types'
import StyledNavBar, { StyledMenuItem, MenuIcon, MenuItems } from './style'
import Badge from 'components/Badge';
import Avatar from 'components/Avatar';

import profileImage from '../../assets/images/face4.jpg';
import { faCommentDots, faUsers, faFolder, faStickyNote, faEllipsisH, faCog } from '@fortawesome/free-solid-svg-icons';


function NavBar({ children, ...rest }) {
    return (
        <StyledNavBar {...rest}>
            <Avatar src={profileImage} status="online" />
            <MenuItems>
                <MenuItem showBadge active icon={faCommentDots} />
                <MenuItem icon={faUsers} />
                <MenuItem icon={faFolder} />
                <MenuItem icon={faStickyNote} />
                <MenuItem icon={faEllipsisH} />
                <MenuItem icon={faCog} style={{alignSelf: "end"}} />
                {/* 最后一个菜单项单独设置样式向下对齐 */}
            </MenuItems>
        </StyledNavBar>
    );
}

function MenuItem({icon, active, showBadge, ...rest}) {
    return (
        <StyledMenuItem active={active} {...rest}>
            <a href="#">
                <Badge show={showBadge}>
                    <MenuIcon active={active} icon={icon} />
                </Badge>
            </a>
        </StyledMenuItem>
    );
}

// NavBar.propTypes = {
    
// }

export default NavBar;
export { MenuItem };

