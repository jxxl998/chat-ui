import React from 'react'
import PropTypes from 'prop-types'
import StyledNoteList, { Notes } from './style'
import FilterList from 'components/FilterList'
import NoteCard from 'components/NoteCard';
import useStaggeredList from 'hooks/useStaggeredList';
import { animated } from 'react-spring';

function NoteList({ children, ...rest }) {
    const trailAnimes = useStaggeredList(10);
    return (
        <StyledNoteList {...rest}>
            <FilterList
                options={["最新笔记优先", "按笔记名排序"]}
                actionLabel="add note"
            >
                <Notes>
                    {new Array(10).fill(0).map((_, i) => (
                        <animated.div key={i} style={trailAnimes[i]}>
                            <NoteCard key={i} />
                        </animated.div>
                    ))}
                </Notes>
            </FilterList>
            {children}
        </StyledNoteList>
    );
}

NoteList.propTypes = {
    children: PropTypes.any
}

export default NoteList;

