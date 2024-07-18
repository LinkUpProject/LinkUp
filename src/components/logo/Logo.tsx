// Logo

// 导入React
import React from "react";
// 导入数据
import siteInfo from "../../config/config";


interface LogoProps {
  w: number;
  h: number;
}

const Logo: React.FC<LogoProps> = ({ w, h }) => {
  return (
    <img
      src={siteInfo.logo}
      alt="Logo"
      width={w}
      height={h}
      className="object-cover"
    />
  );
};
export default Logo;
