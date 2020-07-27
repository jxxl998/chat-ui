import styled from 'styled-components';

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
        content: "";
        display: block;
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #fff;
        transform: scale(2); 
    }

    &::after{
        content: "";
        display: block;
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${({ theme }) => theme.green};
    }
`;

// 头像原型蒙版
const AvatarClip = styled.div`
    width: ${({size}) => size};
    height: ${({size}) => size};
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
