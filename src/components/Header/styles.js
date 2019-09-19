import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdSpa } from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 24px;
  box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.1);
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled(MdSpa).attrs({
  size: 32,
  color: 'black',
})`
  margin-right: 16px;
  line-height: 1;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  margin: 16px;
  color: black;
  font-weight: 600;
  line-height: 1;
  transition: color 0.2s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    color: #f36;
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 16px;
`;
