import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Photo, Modal, Card } from 'components';
import { List, ListItem } from './PhotoList.Styles';

function PhotoList({ photos, setPhotos, handleSave, match }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [page, setPage] = useState('');

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setPage('home');
    }

    if (location.pathname.includes('search')) {
      setPage('search');
    }
  }, []);

  const handleClick = (photo) => {
    setModalOpen(true);
    setModalContent(photo);
  };

  console.log(photos)
  return (
    <List page={page}>
      {photos.map((photo) => (
        <ListItem page={page} key={photo.id} onClick={() => handleClick(photo)}>
          {page === 'home' ? <Card photo={photo} /> : <Photo photo={photo} />}
        </ListItem>
      ))}
      <Modal
        isOpen={modalOpen}
        content={modalContent}
        setModalOpen={setModalOpen}
        setPhotos={setPhotos}
        photos={photos}
        handleSave={handleSave}
      />
    </List>
  );
}

export default PhotoList;
