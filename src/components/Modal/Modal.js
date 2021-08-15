import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import useLocalStorage from 'utils/useLocalStorage';
import {
  ModalWrapper,
  ModalContent,
  TopNavBar,
  UserProfile,
  UserImage,
  UserInfo,
  Name,
  LastUpdated,
  ModalClose,
  Image,
  Footer,
  SaveImage,
} from './Modal.Styles';

function Modal({ isOpen, content, setModalOpen }) {
  const [lastUpdated, setLastUpdated] = useState('');
  const [photos, setPhotos] = useLocalStorage('savedImages', []);

  useEffect(() => {
    if (isOpen) {
      const dateNow = Date.now();
      const dateCreated = Date.parse(content.created_at);

      let diff = Math.abs(dateNow - dateCreated) / 1000;
      const hours = Math.floor(diff / 3600) % 24;

      setLastUpdated(`${hours} ${hours < 2 ? 'hour' : 'hours'} ago`);

      //when modal is open disable scroll
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  const handleSave = () => {
    const imageExists = photos.find((ph) => ph.id === content.id);
    if (imageExists) {
      const photosArr = photos.filter((ph) => ph.id !== content.id);
      setPhotos(photosArr);
    }
    if (!imageExists) {
      const photosArr = [...photos, content];
      setPhotos(photosArr);
    }
  };

  if (!isOpen) return null;
  return createPortal(
    <ModalWrapper role="button" onClick={handleModalClose}>
      <ModalContent role="button" onClick={handleModalContentClick}>
        <TopNavBar>
          <UserProfile>
            <UserImage
              src={content.user.profile_image.medium}
              alt="user image"
            />

            <UserInfo>
              <Link to={`/users/${content.user.username}`}>
                <Name>{content.user.name}</Name>
              </Link>
              <LastUpdated>{lastUpdated}</LastUpdated>
            </UserInfo>
          </UserProfile>

          <ModalClose role="button" onClick={handleModalClose}>
            x
          </ModalClose>
        </TopNavBar>
        <Image src={content.urls.regular} alt={content.alt_description} />
        <Footer>
          <SaveImage onClick={handleSave}>
            {/* {isSaved ? ` remove save` : `save`} */}
            save
          </SaveImage>
        </Footer>
      </ModalContent>
    </ModalWrapper>,
    document.getElementById('modal')
  );
}

export default Modal;
