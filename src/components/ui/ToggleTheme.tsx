import React from 'react'
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";


const ToggleTheme = () => {
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();
  return (
    <Switch
      checked={isDark}
      onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      color="primary"
      iconOff={<BsFillSunFill />}
      iconOn={<BsFillMoonFill />}
    />
  );
}

export default ToggleTheme