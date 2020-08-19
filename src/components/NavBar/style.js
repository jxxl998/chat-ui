import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { activeBar } from 'utils/mixins';
import StyledAvatar, { StatusIcon } from 'components/Avatar/style';

const StyledNavBar = styled.nav`
    display: grid;
    grid-template-rows: 1fr 4fr;
    width: 100px;
    height: 100vh;
    background-color: ${({ theme }) => theme.darkPurple};
    padding: 30px 0;

    ${StyledAvatar} {
        justify-self: center;
        ${StatusIcon} {
            &::before {
                background-color: ${({ theme }) => theme.darkPurple};
            }
        };
    };

    
`;

const StyledMenuItem = styled.div`
    & > a {
        width: 100%;
        height: 74px;

        display: flex;
        align-items: center;
        justify-content: center;

        ${activeBar()};
        ${({ active }) => (active ? "" : `&::before, &::after {height: 0}`)};

        &:hover {
            /* ::before,
            ::after{
                height: 100%;
            } */

            svg {
                transform: scale(1.2);  
                opacity: 1;
            }
        }
        
    }
`;

const MenuIcon = styled(FontAwesomeIcon)`
    color: white;
    font-size: 24px;
    opacity: ${({ active }) => (active ? 1 : 0.3)};

    transform: scale(1);
    transition: 0.1s;
`;

const MenuItems = styled.div`
    display: grid;
    grid-template-rows: repeat(5, minmax(auto, 88px)) 1fr;
    /* this auto means the height of each menuitem that defined in StyledMenuItem */
`;

export default StyledNavBar;

export { MenuIcon, StyledMenuItem, MenuItems };