import React from 'react';
import Button from "./components/Button";
import useColorSwitch from "./components/useColorSwitch";


function App() {
  const [color1, handleButtonClick1] = useColorSwitch(); // 在hook里面有默认值

  const [color2, handleButtonClick2] = useColorSwitch("yellow", "blue");



  return (
    <div>
      <Button label="btn1" onClick={handleButtonClick1}>
        <span>test children</span>
        <p style={{ color: color1 }}>lol</p>
      </Button>

      <Button label="btn2" onClick={handleButtonClick2}>
        <p style={{ color: color2 }}>LOL</p>
      </Button>

    </div>
  );
}

export default App;
