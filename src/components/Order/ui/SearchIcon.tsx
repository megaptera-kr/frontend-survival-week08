import styled from 'styled-components';

import SearchIcon from '../../../../static/icons/search.svg';

const StyledIcon = styled(SearchIcon)`
  color: ${({ theme }) => theme.colors.inputBorder};
`;

export default StyledIcon;
