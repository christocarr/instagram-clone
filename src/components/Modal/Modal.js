import {
  ModalWrapper,
  ModalContent,
  TopNavBar,
  UserImage,
  ModalClose,
  Image,
} from './Modal.Styles';
import { withRouter } from 'react-router-dom';

function Modal({ history, location }) {
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
          <UserImage src={location.state.profileImage} alt="user image" />
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
