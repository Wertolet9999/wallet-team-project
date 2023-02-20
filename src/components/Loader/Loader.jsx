import React from 'react';
import { RingLoader } from 'react-spinners';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <RingLoader color="#3050e1f4" size={120} />
    </LoaderContainer>
  );
};

export const LoaderMobile = () => {
  return (
    <LoaderContainer>
      <RingLoader color="#3050e12e" size={90} />
    </LoaderContainer>
  );
};
