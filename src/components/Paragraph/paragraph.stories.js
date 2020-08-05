import React from "react";
import Paragraph from ".";

export default {
    title: "排版/Paragraph",
    component: Paragraph
};

export const Default = () => (
    <>
        <Paragraph>Default</Paragraph>
        <Paragraph>This is a Paragraph</Paragraph>
    </>
);

export const Ellipsis = () => (
    <>
        <Paragraph>DefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefaultDefault</Paragraph>
    </>
);