import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  text-shadow: 1px 1px 1px #111;
`;

export const SmallBar = styled.div`
  border-top: 1px solid #ddd;
  width: 2%;
  height: 0;
  box-shadow: 1px 1px 1px #111;
`;

export const BigBar = styled.div`
  border-top: 1px solid #ddd;
  height: 0;
  flex-grow: 1;
  box-shadow: 1px 1px 1px #111;
`;
