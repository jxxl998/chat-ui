import styled, { css } from 'styled-components';

// css样式复用，使用styled-components下的css辅助函数
const circleMixinFun = (color, size = "8px") => css`
        content: "";
        display: block;
        position: absolute;
        width: ${size};
        height: ${size};
        border-radius: 50%;
        background: ${color};
`;

// 头像组件最外层容器
const StyledAvatar = styled.div`
    position: relative;
`;

// 在线状态
const StatusIcon = styled.div`
    position: absolute;   
    left: 2px;
    top: 4px;

    /* 伪元素，&表示指向当前div */
    &::before{
        ${({ size }) => circleMixinFun("white", size)}
        transform: scale(2)
    }

    &::after{
        ${({ theme, status, size }) => {
        if (status === "online") {
            return circleMixinFun(theme.green, size);
        } else if (status === "offline") {
            return circleMixinFun(theme.grey, size);
        }
    }}
    }
`;

// 头像原型蒙版
const AvatarClip = styled.div`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    border-radius: 50%;
    overflow: hidden;
`;

// 头像
const AvatarImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

// 导出组件，把最外层组件默认导出，其余为命名导出
export default StyledAvatar;
export { StatusIcon, AvatarClip, AvatarImage };
