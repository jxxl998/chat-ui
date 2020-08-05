import React from "react";
import Input from ".";
import Icon from "components/Icon";

import { ReactComponent as ClipIcon } from '../../assets/icons/clip.svg';
import { ReactComponent as SmileIcon } from '../../assets/icons/smile.svg';



export default {
    title: "UI/Input",
    component: Input
};

export const Default = () => <Input />;

export const Search = () => <Input.Search />;

export const WithAffix = () => {
    return (
        <Input
            prefix={<Icon icon={ClipIcon} color="#ccc" />}
            suffix={<Icon icon={SmileIcon} color="#ccc" />}
        />
    );
};

