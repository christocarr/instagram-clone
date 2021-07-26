import { useState } from 'react';
import { useHistory } from 'react-router-dom';
function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();
  const handleChange = (ev) => {
    setSearchTerm(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setSearchTerm('');
    history.push(`/search/${searchTerm.toLowerCase()}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={searchTerm} onChange={handleChange} />
    </form>
  );
}

export default Search;
