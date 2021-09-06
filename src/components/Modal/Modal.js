import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import getLastUpdated from '../../utils/getLastUpdated';
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

function Modal({
  isOpen,
  content,
  setModalOpen,
  photos,
  setPhotos,
  handleSave,
}) {
  const [lastUpdated, setLastUpdated] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setLastUpdated(getLastUpdated(content.created_at));

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
          <SaveImage onClick={() => handleSave(content)}>
            {isSaved ? ` remove save` : `save`}
          </SaveImage>
        </Footer>
      </ModalContent>
    </ModalWrapper>,
    document.getElementById('modal')
  );
}

export default Modal;
