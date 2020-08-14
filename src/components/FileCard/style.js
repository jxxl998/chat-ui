import styled from 'styled-components';
import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import Popover from 'components/Popover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { card } from '../../utils/mixins';

const FileIcon = styled(FontAwesomeIcon)`
    font-size: 45px;
    color: lightgray;
    grid-area: icon;
    justify-self: start;

`;

const FileName = styled(Heading).attrs({ level: 2 })`
    grid-area: name;
    align-self: center;
`;

const FileSize = styled(Paragraph).attrs({ type: "secondary" })`
    grid-area: size;
    justify-self: start;
    align-self: center;
`;

const Options = styled(Popover)`
    grid-area: options;
`;

const Time = styled(Paragraph).attrs({ type: "secondary" })`
    grid-area: time;
    justify-self: end;
`;

const StyledFileCard = styled.div`
    ${card()};
    display: grid;
    grid-template-areas: 
        "icon name options"
        "icon size time";
    grid-template-columns: 74px 1fr 1fr;
`;

export default StyledFileCard;
export { FileIcon, FileName, FileSize, Options, Time };