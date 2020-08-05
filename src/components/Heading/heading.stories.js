import React from "react";
import Heading from ".";

export default {
    title: "排版/Heading",
    component: Heading
};

// export const Default = () => <Heading>Default</Heading>;

export const H1 = () => <Heading level={1}>this is title</Heading>;
export const H2 = () => <Heading level={2}>this is title</Heading>;
export const H3 = () => <Heading level={3}>this is title</Heading>;
export const H4 = () => <Heading level={4}>this is title</Heading>;
export const H5 = () => <Heading level={5}>this is title</Heading>;
export const H6 = () => <Heading level={6}>this is title</Heading>;

