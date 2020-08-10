import React from "react";
import Radio from ".";

export default {
    title: "UI/Input/Radio",
    component: Radio
};

export const Default = () => <Radio>Options</Radio>;

export const RadioGroup = () => (
    <Radio.Group label="Select">
        <Radio name="option">A</Radio>
        <Radio name="option">B</Radio>
        <Radio name="option">C</Radio>
    </Radio.Group>
);
