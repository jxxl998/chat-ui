import React from 'react'
import Avatar from '.'

import face1 from '../../assets/images/face1.jpg';
import face2 from '../../assets/images/face2.jpg';
import face3 from '../../assets/images/face3.jpg';
import face4 from '../../assets/images/face4.jpg';



// default avatar (without size)
export default {
    title: "UI/Avatar",
    components: Avatar,
};

export const Default = () =>
    <Avatar
        src={face1}
        size="48px"
        status="online"

    />;

// check the sizes of avatr
export const Sizes = () => {
    return (
        <div className="row-elements">
            <Avatar src={face1} size="48px" />
            <Avatar src={face2} size="56px" />
            <Avatar src={face3} size="64px" />
            <Avatar src={face4} size="72px" />
        </div>
    );
};

// avatar with status
export const WithStatus = () => {
    return (
        <div className="row-elements">
            <Avatar src={face2} status="online" />
            <Avatar src={face3} status="offline" />
            <Avatar src={face4} status="offline" size="72px" statusIconSize="12px" />
        </div>
    );
};