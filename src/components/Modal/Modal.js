import { useState, useEffect } from 'react';
import {
  ModalWrapper,
  ModalContent,
  TopNavBar,
  UserProfile,
  UserInfo,
  UserImage,
  UserName,
  LastUpdated,
  ModalClose,
  Image,
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
  }, []);

  const handleModalClose = () => {
    history.goBack();
  };

  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  console.log(location.state);
  return (
    <ModalWrapper role="button" onClick={handleModalClose}>
      <ModalContent role="button" onClick={handleModalContentClick}>
        <TopNavBar>
          <UserProfile>
            <UserImage src={location.state.profileImage} alt="user image" />

            <UserInfo>
              <UserName>{location.state.userName}</UserName>
              <LastUpdated>{lastUpdated}</LastUpdated>
            </UserInfo>
          </UserProfile>

          <ModalClose role="button" onClick={handleModalClose}>
            x
          </ModalClose>
        </TopNavBar>
        <Image src={location.state.imageUrl} alt={location.state.imageAlt} />
      </ModalContent>
    </ModalWrapper>
  );
}

export default withRouter(Modal);
