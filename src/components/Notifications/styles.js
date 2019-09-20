import styled, { css } from 'styled-components';
import { MdInbox } from 'react-icons/md';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

export const Badge = styled.button`
  position: relative;
  display: flex;

  ${props =>
    props.hasUnread &&
    css`
      &::before {
        content: '';
        position: absolute;
        top: -4px;
        right: -4px;
        width: 16px;
        height: 16px;
        border: 2px solid white;
        border-radius: 50%;
        background-color: #f36;
      }
    `}
`;

export const Icon = styled(MdInbox).attrs({
  size: 20,
})``;

export const Menu = styled.div`
  position: absolute;
  display: ${props => (props.isVisible ? 'flex' : 'none')};
  flex-direction: column;
  top: calc(100% + 4px);
  right: 0;
  width: 280px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const Scrollable = styled(PerfectScrollbar)`
  max-height: 360px;
`;

export const Notification = styled.button`
  padding: 16px 20px;
  text-align: left;

  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: #fafafa;
  }

  ${props =>
    props.unread &&
    css`
      font-weight: 600;

      &::after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        margin: 0 8px;
        border-radius: 50%;
        background-color: #f36;
        opacity: 0.5;
      }
    `}
`;

export const Text = styled.p`
  font-size: 13px;
  margin-bottom: 4px;
`;

export const Timestamp = styled.time`
  font-size: 12px;
  opacity: 0.7;
`;
