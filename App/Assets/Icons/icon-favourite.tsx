import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const IconFavourite = props => {
  return (
    <Svg
      width={24}
      height={24}
      fill="#d2691e"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill="#d2691e" d="M12 9.229C12.234 8.109 13.547 3 17.382 3 19.602 3 22 4.551 22 8.003c0 3.907-3.627 8.47-10 12.629C5.627 16.473 2 11.91 2 8.003c0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zM0 8.003C0 12.071 3.06 17.484 12 23c8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737C9.662-.996 0-.004 0 8.003z" />
    </Svg>
  );
};
