import React from 'react';

import {
  TitleSeparatorProps,
} from '../../utils/types';

import {
  Container,
  SmallBar,
  BigBar,
} from './styles';

const NetworkItem = ({
  title,
} : TitleSeparatorProps) => {
  return (
    <Container>
      <SmallBar />
      {title}
      <BigBar />
    </Container>
  );
}

export default NetworkItem;
