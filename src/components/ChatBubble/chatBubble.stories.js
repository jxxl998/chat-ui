import React from "react";
import ChatBubble from ".";
import VoiceMessage from "components/VoiceMessage";
import Emoji from "components/Emoji";

export default {
    title: "UI/ChatBubble",
    component: ChatBubble,
    // 默认该组件下所有元素内边距都为24px
    decorators: [storyFn => <div style={{ padding: "24px" }}>{storyFn()}</div>]
};

export const FromOthers = () => <ChatBubble time="昨天 下午14:26">This is a message from frd!<Emoji label={"xixi"}>😁</Emoji></ChatBubble>;

export const Mine = () => <ChatBubble type="mine" time="昨天 下午14:26" >This is a message from me!</ChatBubble>;

export const VoiceMessageOthers = () => {
    return (
        <ChatBubble time="昨天 下午14:26">
            <VoiceMessage time="01:24" />
        </ChatBubble>
    );
};

export const VoiceMessageMine = () => {
    return (
        <ChatBubble type="mine" time="昨天 下午18：30">
            <VoiceMessage type="mine" time="01:24" />
        </ChatBubble>
    );
};
