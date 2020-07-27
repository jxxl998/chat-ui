import React from 'react'
import Avatar from '.'

import face1 from '../../assets/images/face1.jpg';
import face2 from '../../assets/images/face2.jpg';
import face3 from '../../assets/images/face3.jpg';
import face4 from '../../assets/images/face4.jpg';


export default {
    title: "Avatar",
    components: Avatar,
};

export const Default = () => <Avatar src={face1} size="48px" status="true"/>;


export const Sizes = () => {
    return (
        <div>
            <Avatar src={face1} size="48px" />
            <Avatar src={face2} size="56px" status="true"/>
            <Avatar src={face3} size="64px" />
            <Avatar src={face4} size="72px" status="true"/>
        </div>
    );
};