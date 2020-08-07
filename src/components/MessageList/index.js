import React from 'react'
import PropTypes from 'prop-types'
import StyledMessageList, { ChatList } from './style'
import Filter from 'components/Filter';
import Select from 'components/Select';
import Option from 'components/Option';
import Button from 'components/Button';
import Icon from 'components/Icon';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import Input from 'components/Input';
import MessageCard from 'components/MessageCard';
import face2 from '../../assets/images/face2.jpg'



function ChatFilter() {
    return (
        <Filter style={{ padding: "20px 0" }}>
            <Filter.Filters label="列表排序">
                <Select>
                    <Option>最新消息优先</Option>
                    <Option>在线好友优先</Option>
                </Select>
            </Filter.Filters>

            <Filter.Action label="创建会话">
                <Button>
                    <Icon icon={Plus} width={12} height={12} />
                </Button>
            </Filter.Action>
        </Filter>
    );
}

function MessageList({ children, ...rest }) {
    return (
        <StyledMessageList {...rest}>
            <Input.Search />
            <ChatFilter />
            <ChatList>
                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                    <MessageCard
                        name="username"
                        key={index}
                        active={index === 3}
                        replied={index % 3 === 0}
                        avatarSrc={face2}
                        statusText="online"
                        avatarStatus="online"
                        time="2h ago"
                        message="🈚事"
                        unreadCount={5}
                    />
                ))}
            </ChatList>
        </StyledMessageList>
    );
}

MessageList.propTypes = {
    children: PropTypes.any
}

export default MessageList;

