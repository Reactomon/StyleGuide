import styled from 'styled-components';

export const StyledFirstDiv = styled.div`
  display: inline-block;
  font-family: ${props => props.theme.fonts.secondaryFontBlackFamily};
  color: ${props => props.theme.colorPalette.primary.light};

  @media ${props => props.theme.mediaQuery.medium} {
    color: ${props => props.theme.colorPalette.secondary.main};
  }

  @media ${props => props.theme.mediaQuery.large} {
    color: ${props => props.theme.colorPalette.newpurple};
  }
`;