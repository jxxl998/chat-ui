import React from 'react'
import PropTypes from 'prop-types'
import StyledNoteCard, { NoteImage, NoteTitle, NoteExcerpt, NotePublished } from './style'
import face1 from '../../assets/images/face1.jpg'

function NoteCard({ children, ...rest }) {
    return (
        <StyledNoteCard {...rest}>
            <NoteImage src={face1} />
            <NoteTitle>title</NoteTitle>
            <NoteExcerpt>note brief...</NoteExcerpt>
            <NotePublished>Aug 18 2020</NotePublished>
        </StyledNoteCard>
    );
}

NoteCard.propTypes = {
    children: PropTypes.any
}

export default NoteCard;

