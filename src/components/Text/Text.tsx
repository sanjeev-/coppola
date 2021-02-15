import React from 'react';
import styled from 'styled-components';

import {theme} from '../../theme'
import './index.css'

import { 
  space, 
  layout,  
  typography,
  background, 
  border, 
  position, 
  shadow } from 'styled-system'

  interface TextProps {
    color?: string
    fontSize?: number
    fontWeight?: number
  }

  const defaultProps: TextProps = {
    color: theme.colors.grey[3],
    fontSize: 2,
    fontWeight: 0,
  }

const Text: React.FunctionComponent<TextProps> = styled("p")<{primary: boolean, muted: boolean, secondary: boolean, accent: boolean, gradient: boolean}>`
font-family: 'JosefinSans-Regular';
${props => props.primary && `
color: ${theme.colors.grey[3]};
`}
${props => props.muted && `
color: ${theme.colors.grey[2]};
`}
${props => props.secondary && `
color: ${theme.colors.beige[0]};
`}
${props => props.accent && `
color: ${theme.colors.green[0]};
`}
${props => props.gradient && `
background: linear-gradient(to right, fuchsia 0%, #D4F3F9 50%, lavender 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`}
${space}
${layout}
${background}
${border}
${position}
${shadow}
${typography}
`;

Text.defaultProps=defaultProps

export default Text;