import { useState } from 'react';
function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (ev) => {
    setSearchTerm(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={searchTerm} onChange={handleChange} />
    </form>
  );
}

export default Search;
