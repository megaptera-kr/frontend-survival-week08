import styled from 'styled-components';

import { IconProps } from './types';

const IconWrraper = styled.div`
  padding: 2rem;
`;

function Icon({ children }: IconProps) {
  return <IconWrraper>{children}</IconWrraper>;
}

export default Icon;
