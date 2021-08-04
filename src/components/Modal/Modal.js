import { ModalWrapper, ModalContent } from './Modal.Styles';
import { withRouter } from 'react-router-dom';

function Modal({ history, location }) {
  const handleModalWrapperClick = () => {
    history.goBack();
  };

  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  console.log(location.state);
  return (
    <ModalWrapper role="button" onClick={handleModalWrapperClick}>
      <ModalContent role="button" onClick={handleModalContentClick}>
        <img src={location.state.imageUrl} alt={location.state.imageAlt} />
      </ModalContent>
    </ModalWrapper>
  );
}

export default withRouter(Modal);
