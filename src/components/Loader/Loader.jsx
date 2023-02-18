import React from 'react';
import { RingLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <RingLoader
      color="#3050e1f4"
      size={150}
      // wrapperStyle={{
      //   display: 'block',
      //   textAlign: 'center',
      //   left: '50%',
      //   right: '50%',
      //   top: '50%',
      //   bottom: '50%',
      // }}
    />
  );
};
