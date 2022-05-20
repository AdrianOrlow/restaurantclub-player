import styled from 'styled-components';
import { SPIKES_WIDTH } from './ProgressUtils';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 3rem;
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeight.primary.regular};
  font-size: 18px;
  padding: 1rem;
`;

export const Bar = styled.div`
  background: #000000;
  height: 1px;
  width: 100%;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    background: #000;
    height: 5px;
    width: 5px;
    border-radius: 5px;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const BarProgress = styled.div<{ value: number }>`
  margin-top: -2.5px;
  height: 5px;
  width: ${({ value }) => value}%;
  background: #2a2a2a;
`;

export const SpikesContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3rem;

  span {
    display: block;
    width: 4px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 33%;
    width: ${SPIKES_WIDTH * 4}px;
    background: ${({ theme }) => theme.colors.primary};
  }
`;
