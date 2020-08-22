import React from 'react'
// import PropTypes from 'prop-types'
import StyledNavBar, { StyledMenuItem, MenuIcon, MenuItems } from './style'
import Badge from 'components/Badge';
import Avatar from 'components/Avatar';

import profileImage from '../../assets/images/face4.jpg';
import { faCommentDots, faUsers, faFolder, faStickyNote, faEllipsisH, faCog } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, matchPath } from 'react-router-dom';


function NavBar({ children, ...rest }) {
    return (
        <StyledNavBar {...rest}>
            <Avatar src={profileImage} status="online" />
            <MenuItems>
                <MenuItem to="/" showBadge icon={faCommentDots} />
                <MenuItem to="/contacts" icon={faUsers} />
                <MenuItem to="/files" icon={faFolder} />
                <MenuItem to="/notes" icon={faStickyNote} />
                <MenuItem  icon={faEllipsisH} />
                <MenuItem to="/settings" icon={faCog} style={{ alignSelf: "end" }} />
                {/* 最后一个菜单项单独设置样式向下对齐 */}
            </MenuItems>
        </StyledNavBar>
    );
}

function MenuItem({ to, icon, showBadge, ...rest }) {
    const loc = useLocation();
    const active = !!matchPath(loc.pathname, {
        path: to,
        exact: to === "/",
    })
    // Boolean 
    return (
        <StyledMenuItem active={active} {...rest}>
            <Link to={to}>
                <Badge show={showBadge}>
                    <MenuIcon active={active} icon={icon} />
                </Badge>
            </Link>
        </StyledMenuItem>
    );
}

// NavBar.propTypes = {

// }

export default NavBar;
export { MenuItem };

