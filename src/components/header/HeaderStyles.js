import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaMagento } from 'react-icons/fa';
import { Container } from '../../globalStyles';

export const Nav = styled.div`
  background: #f4f4f4;
  position: sticky;
  top: 0;
  z-index: 2;
  height: 80px;
  font-weight: bold;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  height: 80px;
  justify-content: space-between;

  ${Container};
`;

export const NavLogo = styled(Link)`
  font-size: 2rem;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  color: #333;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
    font-size: 1.8rem;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #fff;
  }
`;

export const NavItem = styled.li`
  height: 40px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #11bfae;
  }
  @media screen and (max-width: 800px) {
    width: 100;
    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #333;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  &:hover {
    color: #11bfae;
    transition: all 0.3 ease;
  }

  @media screen and (max-width: 800px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #11bfae;
      transition: all 0.3 ease;
    }
  }
`;
