import styled from 'styled-components';
export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  background-color: rgba(100, 100, 100, 0.5);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px lightgray solid;
  border-radius: 1em;
  background-color: white;
  padding: 1em;
`;

export const TopNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const UserImage = styled.img`
  width: 30px;
  height: 30px;
`;

export const ModalClose = styled.div`
  cursor: pointer;
`;

export const Image = styled.img`
  width: 60%;
`;
