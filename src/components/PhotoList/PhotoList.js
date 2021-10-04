import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Photo, Modal, Card } from 'components';
import { List, ListItem } from './PhotoList.Styles';

function PhotoList({ photos }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [page, setPage] = useState('');

  const location = useLocation();

  useEffect(() => {
    const [, path] = location.pathname.split('/');

    if (path === '') {
      setPage('home');
    }

    if (path === 'search' || path === 'saved' || path === 'collection') {
      setPage('gridLayout');
    }

    if (path === 'explore') {
      setPage('masonry');
    }
  }, []);

  const handleClick = (photo) => {
    setModalOpen(true);
    setModalContent(photo);
  };

  return (
    <List page={page}>
      {photos.map((photo) => (
        <ListItem page={page} key={photo.id} onClick={() => handleClick(photo)}>
          {page === 'home' ? (
            <Card photo={photo} />
          ) : (
            <Photo photo={photo} page={page} />
          )}
        </ListItem>
      ))}
      <Modal
        isOpen={modalOpen}
        content={modalContent}
        setModalOpen={setModalOpen}
      />
    </List>
  );
}

export default PhotoList;
