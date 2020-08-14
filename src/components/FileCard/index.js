import React from 'react'
import PropTypes from 'prop-types'
import StyledFileCard, { FileName, FileIcon, FileSize, Options, Time } from './style'
import { faFileExcel, faFileWord, faFilePdf, faFileImage, faFilePowerpoint, faFileAudio, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const fileIcon = {
    excel: faFileExcel,
    word: faFileWord,
    pdf: faFilePdf,
    image: faFileImage,
    ppt: faFilePowerpoint,
    audio: faFileAudio
}

function FileCard({ children, ...rest }) {
    return (
        <StyledFileCard {...rest}>
            <FileIcon icon={fileIcon.audio}></FileIcon>
            <FileName>Origin.audio</FileName>
            <FileSize>20.3M</FileSize>
            <Options>
                <FontAwesomeIcon icon={faCommentDots} style={{ opacity: 0.3, fontSize: "20px", color: "gray" }} />
            </Options>
            <Time>Aug 14 2020</Time>
            {children}
        </StyledFileCard>
    );
}

FileCard.propTypes = {
    children: PropTypes.any
}

export default FileCard;

