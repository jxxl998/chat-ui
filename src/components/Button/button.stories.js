import React from "react";
import Button from ".";
import Icon from "components/Icon";
import {ReactComponent as Plus} from '../../assets/icons/plus.svg';

export default {
    title: "UI/Button",
    component: Button
};

export const Default = () => <Button shape="rect">Default Button</Button>;

export const CircleButton = () => <Button><Icon icon={Plus} width={12} height={12}></Icon></Button>;