import React from 'react'
import PropTypes from 'prop-types'
import StyledContactList, { Contact } from './style'
import FilterList from 'components/FilterList'
import ContactCard from 'components/ContactCard';
import useStaggeredList from 'hooks/useStaggeredList';
import { animated } from 'react-spring';

function ContactList({ children, ...rest }) {
    const trailAnimes = useStaggeredList(10);
    return (
        <StyledContactList {...rest}>
            <FilterList options={["新添加优先", "按姓名排序"]} actionLabel="添加好友">
                <Contact>
                    {new Array(10).fill(0).map((_, i) => (
                        <animated.div key={i} style={trailAnimes[i]}>
                            <ContactCard key={i} />
                        </animated.div>
                    )
                    )}
                </Contact>
            </FilterList>
            {children}
        </StyledContactList>
    );
}

ContactList.propTypes = {
    children: PropTypes.any
}

export default ContactList;

