import React from 'react';
import { chakra, useColorModeValue } from '@chakra-ui/react';

export const AppStoreBadge = () => {
  return (
    <chakra.img
      src={useColorModeValue(
        'https://link.to/light-mode-app-store-badge.png',
        'https://link.to/dark-mode-app-store-badge.png'
      )}
      alt="Download on the App Store"
      h={10}
    />
  );
};
