import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const IconFavouriteFill = props => {
  return (
    <Svg
      width={24}
      height={24}
      fill="#d2691e"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill="#d2691e" d="M12 4.248C8.852-1.154 0 .423 0 7.192 0 11.853 5.571 16.619 12 23c6.43-6.381 12-11.147 12-15.808C24 .4 15.125-1.114 12 4.248z" />
    </Svg>
  );
};
