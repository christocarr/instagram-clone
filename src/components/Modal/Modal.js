import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleSavePhoto } from '../../store/toggleSavePhotoReducer/action';
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

function Modal({ isOpen, content, setModalOpen, toggleSavePhoto }) {
  const [lastUpdated, setLastUpdated] = useState('');

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
      <ModalContent
        role="button"
        onClick={handleModalContentClick}
        width={content.width}
        height={content.height}
      >
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
        <Image
          src={content.urls.regular}
          alt={content.alt_description}
          width={content.width}
          height={content.height}
        />
        <Footer>
          <SaveImage onClick={() => toggleSavePhoto(content)}>save</SaveImage>
        </Footer>
      </ModalContent>
    </ModalWrapper>,
    document.getElementById('modal')
  );
}

const mapDispatchToProps = { toggleSavePhoto };

export default connect(null, mapDispatchToProps)(Modal);
