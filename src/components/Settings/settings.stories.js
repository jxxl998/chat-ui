import React from "react";
import Settings, { SettingsItem } from ".";

export default {
    title: "PageComponent/Settings",
    component: Settings
};

export const Default = () => <Settings />;

export const WithoutDescription = () => (
    <SettingsItem label="this is a setting item without description" />
);

export const WithDescription = () => (
    <SettingsItem label="this is a setting item with description" description="descirption here!" />
);

export const WithMenu = () => <SettingsItem type="menu" label="with menu" />;