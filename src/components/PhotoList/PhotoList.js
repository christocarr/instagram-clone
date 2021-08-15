import { useState } from 'react';
import { Photo, Modal } from 'components';
import { List, ListItem } from './PhotoList.Styles';

function PhotoList({ photos, setPhotos }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleClick = (photo) => {
    setModalOpen(true);
    setModalContent(photo);
  };
  console.log(modalContent);
  return (
    <List>
      {photos.map((photo) => (
        <ListItem key={photo.id} onClick={() => handleClick(photo)}>
          <Photo photo={photo} />
        </ListItem>
      ))}
      <Modal
        isOpen={modalOpen}
        content={modalContent}
        setModalOpen={setModalOpen}
        setPhotos={setPhotos}
        photos={photos}
      />
    </List>
  );
}

export default PhotoList;
