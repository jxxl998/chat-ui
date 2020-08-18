import React from "react";
import Dropdown from ".";
import { DropdownItem } from "./style";
import Paragraph from "components/Paragraph";
import Seperator from "components/Seperator";
import Icon from "components/Icon";

import { ReactComponent as Options } from 'assets/icons/options.svg';

export default {
    title: "UI/Dropdown",
    component: Dropdown
};

const dropdownContent = (
    <>
        <DropdownItem>
            <Paragraph>person info</Paragraph>
        </DropdownItem>
        <DropdownItem>
            <Paragraph>close conversation</Paragraph>
        </DropdownItem>
        <Seperator />
        <DropdownItem>
            <Paragraph type="danger">block this person</Paragraph>
        </DropdownItem>
    </>
)

export const Default = () => (
    <div
        style={{ display: "flex", justifyContent: "space-between", width: "50%"}}
    >
        <Paragraph>Click 👉</Paragraph>
        <Dropdown content={dropdownContent}>
            <Icon opacity={0.3} icon={Options} />
        </Dropdown>
    </div>
);

export const Left = () => (
    <>
        <Paragraph>Click 👇</Paragraph>
        <Dropdown align="left" content={dropdownContent} >
            <Icon icon={Options} opacity={0.3} />
        </Dropdown>
    </>
);
