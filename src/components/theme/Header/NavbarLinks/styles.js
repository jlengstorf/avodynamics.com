import styled from 'styled-components';
import styleVars from 'styles/styleVars.js';
import { transparentize } from 'polished';

export const Wrapper = styled.div`
  overflow-x: hidden;
  a {
    color: ${transparentize(0.46, styleVars.colors.teal[3])};
    transition: color ${styleVars.transitions.fast} ease-out;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      color: ${transparentize(0.13, styleVars.colors.burg[3])};
    }
    &.active {
      color: ${transparentize(0.13, styleVars.colors.burg[3])};
    }

    @media (max-width: 960px) {
      color: ${transparentize(0.13, styleVars.colors.teal[4])};
	  padding-bottom: 2px;
	  position: relative;
      /* border-bottom: 1px solid ${transparentize(0.8, styleVars.colors.teal[4])} */
	  &::after {
		content: "";
		position: absolute;
		bottom: 2px;
		left: 0;
		height: 1px;
		width: 110%;
		margin-left: -1.25rem;
		background: linear-gradient(90deg, transparent 0%, ${transparentize(0.8, styleVars.colors.teal[4])} 50%);
	  }
    }
  }

  ${({ desktop }) =>
    desktop
      ? `
			align-items: center;
			display: flex;

			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding-top: 3rem;
			padding-left: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;
