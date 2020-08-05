import React from "react";
import Text from ".";

export default {
    title: "排版/Text",
    component: Text
};

export const Default = () => <Text>Default</Text>;

export const Secondary = () => <Text type="secondary">Secondary size text</Text>;

export const Medium = () => <Text size="medium">Medium size text</Text>;

export const LargeAndBold = () => {
    return (
        <Text size="xlarge" bold>
            Large size text
        </Text>
    );
};
