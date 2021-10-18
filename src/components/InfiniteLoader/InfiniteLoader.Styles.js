import styled from 'styled-components';
import InfiniteLoader from 'react-infinite-loader';

//These styles are needed to trigger InfiniteLoader because of the list layout
export const InfiniteLoaderContainer = styled.div`
  position: relative;
  z-index: -100;
  padding: 2em 0 2em 0;
`;

export const StyledInfiniteLoader = styled(InfiniteLoader)`
  position: absolute;
  width: 100%;
  height: 10em;
  bottom: 10em;
`;
