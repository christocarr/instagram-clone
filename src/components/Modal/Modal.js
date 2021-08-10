import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ModalWrapper,
  ModalContent,
  TopNavBar,
  UserProfile,
  UserInfo,
  UserImage,
  Name,
  LastUpdated,
  ModalClose,
  Image,
  Footer,
  SaveImage,
} from './Modal.Styles';
import { withRouter } from 'react-router-dom';

function Modal({ history, location }) {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    const dateNow = Date.now();
    const dateCreated = Date.parse(location.state.createdAt);

    let diff = Math.abs(dateNow - dateCreated) / 1000;
    const hours = Math.floor(diff / 3600) % 24;

    setLastUpdated(`${hours} ${hours < 2 ? 'hour' : 'hours'} ago`);

    //when modal is open disable scroll
    if (location.state.modal) document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleModalClose = () => {
    history.goBack();
  };

  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  const handleImageSave = () => {
    let imagesArr;
    if (localStorage.getItem('savedImages') === null) {
      imagesArr = [];
    } else {
      imagesArr = JSON.parse(localStorage.getItem('savedImages'));
    }

    const imageExists = imagesArr.find(
      (img) => img === location.state.imageUrl
    );
    if (!imageExists) {
      imagesArr.push(location.state.imageUrl);
    }

    localStorage.setItem('savedImages', JSON.stringify(imagesArr));
  };

  return (
    <ModalWrapper role="button" onClick={handleModalClose}>
      <ModalContent role="button" onClick={handleModalContentClick}>
        <TopNavBar>
          <UserProfile>
            <UserImage src={location.state.profileImage} alt="user image" />

            <UserInfo>
              <Link to={`/users/${location.state.userName}`}>
                <Name>{location.state.name}</Name>
              </Link>
              <LastUpdated>{lastUpdated}</LastUpdated>
            </UserInfo>
          </UserProfile>

          <ModalClose role="button" onClick={handleModalClose}>
            x
          </ModalClose>
        </TopNavBar>
        <Image src={location.state.imageUrl} alt={location.state.imageAlt} />
        <Footer>
          <SaveImage onClick={handleImageSave}>Save</SaveImage>
        </Footer>
      </ModalContent>
    </ModalWrapper>
  );
}

export default withRouter(Modal);
