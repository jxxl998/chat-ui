import React from "react";
import TitleBar from ".";
import face2 from '../../assets/images/face2.jpg';

export default {
    title: "UI/TitleBar",
    component: TitleBar
};

export const Default = () => <TitleBar
    status="online"
    srcAvatar={face2}
    name="Leo"
    time="3h ago"
    onlineStatus="online" />;
