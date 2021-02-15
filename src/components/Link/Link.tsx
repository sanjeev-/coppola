import React from 'react';
import styled from "styled-components";
import {theme} from '../../theme'
import { 
  space, 
  layout,  
  fontWeight,
  typography,
  color,
 } from 'styled-system'


interface LinkProps {
  color?: string
  fontSize?: number
  fontWeight?: number
  transition?: string
}

const defaultProps: LinkProps = {
  color: theme.colors.grey[3],
  fontSize: 3,
  fontWeight: 400,
  transition: "color 0.2s, border-color 0.2s, opacity 0.2s",
}

const Link: React.FunctionComponent<LinkProps> = styled.a`
  cursor: pointer;
  font-family: 'JosefinSans-Regular';
  text-decoration: none;
  transition: color 0.2s, border-color 0.2s, opacity 0.2s;
  &:hover {
    color: ${theme.colors.grey[2]};
  }
  ${color}
  ${space}
  ${typography}
  ${fontWeight}
  ${layout}
`;

Link.defaultProps=defaultProps

export default Link;
