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
    const pathSplit = location.pathname.split('/');

    if (pathSplit[1] === '') {
      setPage('home');
    }

    if (
      pathSplit[1] === 'search' ||
      pathSplit[1] === 'saved' ||
      pathSplit[1] === 'collection'
    ) {
      setPage('gridLayout');
    }

    if (pathSplit[1] === 'explore') {
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
