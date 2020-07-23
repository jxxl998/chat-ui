import { useState } from 'react'

function useColorSwitch(color1="#f00", color2="#0f0") {
    const [color, setColor] = useState(color1);

    const handleButtonClick = () => {
        console.log("clicked!");
        setColor(color2);
    }

    return [color, handleButtonClick];
}

export default useColorSwitch;