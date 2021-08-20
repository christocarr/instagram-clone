import { Wrapper, PhotoList } from 'components';
function Explore({ data }) {
  return (
    <Wrapper>
      <PhotoList photos={data} />
    </Wrapper>
  );
}

export default Explore;
