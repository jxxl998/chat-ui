import React from "react";
import MessageCard from ".";

import face3 from '../../assets/images/face3.jpg'

export default {
    title: "UI/MessageCard",
    component: MessageCard
};

export const Default = () => (
    <MessageCard
        avatarSrc={face3}
        name="Dylan"
        avatarStatus="online"
        statusText="online"
        time="3h ago"
        message="hola! my dear frd!"
        unreadCount={6}
    />
);
