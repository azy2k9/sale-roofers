import React from 'react';
import styled from 'styled-components';
import Typography from './Typography';

interface HeadingProps {
  color1?: string;
  color2?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
  variant?: string;
}

interface Props {
  color1?: string;
  color2?: string;
  fullWidth?: boolean;
}

export const StyledHeading = styled.linearGradient`
  background: ${({ color1, color2 }: Props) =>
    `linear-gradient(185.55deg, ${color1} 0%, ${color2} 100%)`};
  width: ${({ fullWidth }) => (fullWidth ? '70%' : '20%')};
  height: 8px;
  border-radius: 24px;
`;

const Heading: React.FC<HeadingProps> = ({
  children,
  color1,
  color2,
  fullWidth,
  variant,
}: HeadingProps) => {
  return (
    <>
      <Typography size="large" variant={variant || 'heading'} weight="bold">
        {children}
      </Typography>
      <StyledHeading color1={color1} color2={color2} fullWidth={fullWidth} />
    </>
  );
};

export default Heading;
