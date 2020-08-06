import React from "react";
import Icon from ".";
import {ReactComponent as SmileIcon} from '../../assets/icons/smile.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


export default {
    title: "UI/Icon",
    component: Icon
};

export const Default = () => <Icon icon={SmileIcon} />;
 
export const CustomColor = () => <Icon icon={SmileIcon} color="#ccc" />

export const CustomSize = () => <Icon icon={SmileIcon} color="pink" width="48px" height="48px" />

export const Fontawesome = () => <FontAwesomeIcon icon={faPlus}  style={{color: "pink", fontSize: "48px"}}/>;