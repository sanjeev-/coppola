import styled from 'styled-components';

import {theme} from '../../theme'
import { space, layout, color, flexbox, grid, background, border, position, shadow } from 'styled-system'

// theme is now fully typed blah blah
const Box = styled("div")<{primary: boolean, secondary: boolean, tertiary: boolean}>`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
  ${grid}
  ${background}
  ${border}
  ${position}
  ${shadow}

  ${props => props.primary && `
  background-color: ${theme.colors.grey[0]};
`}
${props => props.secondary && `
background-color: ${theme.colors.grey[1]};
`}
${props => props.tertiary && `
background-color: ${theme.colors.grey[2]};
`}
`;

// Base Flex component, extends Box
const Flex = styled(Box)`
  display: flex;
`;


export default Flex;
