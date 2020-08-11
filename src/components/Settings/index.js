import React from 'react';
import PropTypes from 'prop-types';
import StyledSettings, { StyledSettingsGroup, StyledSettingsItem, SettingsItemControl } from './style';
import Paragraph from 'components/Paragraph';
import Switch from 'components/Switch';
import Seperator from 'components/Seperator';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Settings({ children, ...rest }) {
    return (
        <StyledSettings {...rest}>
            <SettingsGroup groupName="隐私设置" >
                <SettingsItem label="添加好友时需要验证" />
                <SettingsItem
                    label="推荐通讯录好友"
                    description="上传的通讯录只用来匹配好友列表，本应用不会记录和发送任何信息给其他机构"
                />
                <SettingsItem label="只能通过手机号找到我" />
            </SettingsGroup>

            <SettingsGroup groupName="通知设置" >
                <SettingsItem label="新消息通知" />
                <SettingsItem label="语音和视频通话提醒" />
                <SettingsItem label="显示通知详情" />
                <SettingsItem label="声音" />
                <SettingsItem label="查看已静音好友" type="menu" />
            </SettingsGroup>
        </StyledSettings>
    );
}

function SettingsItem({
    type = "switch",
    label,
    description,
    children,
    ...rest
}) {
    return (
        <StyledSettingsItem {...rest} >
            <SettingsItemControl>
                <Paragraph size="large">{label}</Paragraph>
                {type === "switch" && <Switch />}
                {type === "menu" && <FontAwesomeIcon icon={faAngleRight} style={{ fontSize: "30px", color: "lightgrey", cursor: "pointer" }} />}
            </SettingsItemControl>

            {description && (
                <Paragraph type="secondary" style={{ margin: "4px 0" }} >
                    {description}
                </Paragraph>
            )}

            <Seperator style={{ marginTop: "8px", marginBottom: "20px" }} />
        </StyledSettingsItem>
    );
}

function SettingsGroup({ groupName, children, ...rest }) {
    return (
        <StyledSettingsGroup>
            <Paragraph size="xxlarge" style={{ paddingBottom: "24px" }}>
                {groupName}
            </Paragraph>
            {children}
        </StyledSettingsGroup>
    );
}

Settings.propTypes = {
    children: PropTypes.any,
    type: PropTypes.string,
    label: PropTypes.string,
    description: PropTypes.string,
}

export default Settings;
export { SettingsItem };

