import { useState } from 'react';
import { Form, Input } from './Search.Styles';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getSearchPhotos,
  getSearchTerm,
  clearSearch,
} from '../../store/searchResultsPageReducer/actions';

function Search({ getSearchPhotos, getSearchTerm, clearSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const history = useHistory();

  const handleChange = (ev) => {
    setSearchTerm(ev.target.value.toLowerCase());
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    clearSearch();
    getSearchTerm(searchTerm);
    history.push('/');
    getSearchPhotos(searchTerm);
    setSearchTerm('');
    history.push(`/search/photos/${searchTerm}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input value={searchTerm} onChange={handleChange} placeholder="search" />
    </Form>
  );
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  getSearchPhotos,
  getSearchTerm,
  clearSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
