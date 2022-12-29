import styled from 'styled-components';

import {
  NetworkItemContainerParams,
  NetworkItemNetworkLinkParams,
} from '../../utils/types';

export const Container = styled.div<NetworkItemContainerParams>`
  background-color: ${params => params.buttonColor};
  border-radius: 6px;
  text-align: center;
  box-shadow: 0 0 6px #000;
  width: calc(50% - 12px);
  min-width: calc(50% - 12px);
  max-width: calc(50% - 12px);

  &:hover {
    background-color: ${params => params.textHoverColor};
  }

  @media screen and (max-width: 720px) {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
  }
`;

export const NetworkLink = styled.a<NetworkItemNetworkLinkParams>`
  color: ${params => params.textColor};
  text-decoration: none;
`;

export const NetworkName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 12px 20px;
  font-size: 18px;
`;
