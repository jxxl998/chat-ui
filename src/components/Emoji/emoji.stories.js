import React from "react";
import Emoji from ".";

export default {
    title: "UI/Emoji",
    component: Emoji
};

export const Default = () => (
    <>
        <Emoji label="smile">😀</Emoji>
        <Emoji label="todo">✅</Emoji>
        <Emoji label="cat">🐈</Emoji>
    </>
);
