import { useState, useEffect } from 'react';
import { Wrapper, PhotoList } from 'components';

function Saved() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem('savedImages')) || []
  );
  return (
    <Wrapper>
      <PhotoList photos={data} />
    </Wrapper>
  );
}

export default Saved;
