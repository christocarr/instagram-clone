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
  Icon,
  Footer,
  Likes,
  SaveImage,
  DownLoadButton,
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
            <Icon viewBox="0 0 30 30" fill="hsl(0, 100%, 50%)">
              <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
            </Icon>
          </ModalClose>
        </TopNavBar>
        <Image
          src={content.urls.regular}
          alt={content.alt_description}
          width={content.width}
          height={content.height}
        />
        <Footer>
          <Likes>
            <Icon viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.5206 2.8027C19.1348 3.30469 20.4771 4.45775 21.2354 5.99382C22.122 7.85558 22.2427 10.0008 21.5707 11.9536C20.9521 13.7513 19.938 15.3809 18.6059 16.7178C17.7325 17.6155 16.7914 18.442 15.7912 19.1898L15.7383 19.2347C15.406 19.4584 14.9591 19.3706 14.7324 19.037C14.6171 18.8759 14.5708 18.674 14.6041 18.4776C14.6373 18.2811 14.7473 18.1067 14.9088 17.9942C15.8474 17.2871 16.7323 16.5088 17.5559 15.6661C18.7421 14.4987 19.648 13.0683 20.203 11.4861C20.7368 9.90956 20.6288 8.18086 19.903 6.68598C19.3189 5.51 18.2899 4.62715 17.053 4.24096C15.4753 3.73838 13.7565 4.04305 12.4382 5.05896C12.1762 5.25674 11.818 5.25674 11.5559 5.05896C10.2382 4.04164 8.5187 3.73684 6.94115 4.24096C5.69596 4.61862 4.65663 5.4988 4.06466 6.67699C3.35526 8.17077 3.25377 9.88955 3.78231 11.4592C4.33967 13.0376 5.24529 14.4645 6.42938 15.6301C8.179 17.3392 10.1083 18.8465 12.1824 20.1246C12.4461 20.3111 12.5621 20.6493 12.4697 20.9625C12.3773 21.2757 12.0974 21.4927 11.7765 21.5C11.6318 21.5008 11.4903 21.457 11.3706 21.3741C9.21007 20.0429 7.20077 18.4723 5.37938 16.6908C4.03993 15.3583 3.02208 13.7276 2.40583 11.9266C1.75701 9.97655 1.8902 7.84437 2.77642 5.99382C3.5347 4.45775 4.87695 3.30469 6.49115 2.8027C8.34706 2.21871 10.3607 2.48784 12.0059 3.53981C13.6511 2.48784 15.6647 2.21871 17.5206 2.8027ZM16.7971 9.68833C16.7602 8.85762 16.2172 8.13914 15.4383 7.89052C15.1487 7.70632 15.02 7.34441 15.1267 7.01402C15.2334 6.68363 15.5479 6.47024 15.8883 6.49721C17.2039 6.92033 18.1404 8.10845 18.2618 9.50855C18.2867 9.70431 18.2335 9.90206 18.1141 10.0575C17.9946 10.213 17.819 10.3131 17.6265 10.3355C17.2224 10.3887 16.8519 10.0997 16.7971 9.68833Z"
                fill="hsl(0, 100%, 50%)"
              />
            </Icon>
            {content.likes}
          </Likes>
          <DownLoadButton
            onClick={() => window.open(content.urls.regular, '_blank')}
          >
            Download
          </DownLoadButton>
          <SaveImage onClick={() => toggleSavePhoto(content)}>
            <Icon viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.4979 21.9194C17.3749 21.9224 17.2529 21.8914 17.1459 21.8294L12.0079 19.1234L7.4839 21.5594C6.7459 21.9594 5.8219 21.6854 5.4219 20.9464C5.4169 20.9374 5.4119 20.9284 5.4069 20.9184C5.2499 20.6094 5.1949 20.2604 5.2489 19.9184L6.1289 14.7244L2.4509 11.0004C1.8499 10.3804 1.8499 9.39438 2.4509 8.77338C2.6849 8.52738 2.9949 8.36838 3.3309 8.32238L8.3739 7.55638L10.6169 2.88338C10.9659 2.12338 11.8649 1.78938 12.6259 2.13838C12.9559 2.28938 13.2199 2.55438 13.3709 2.88338L15.6239 7.57238L20.6839 8.34738C21.0929 8.40838 21.4599 8.63438 21.6999 8.97138C22.1479 9.61538 22.0799 10.4854 21.5379 11.0524L17.8769 14.7324L18.3869 17.5314C18.4579 17.9514 18.1809 18.3524 17.7619 18.4314C17.3499 18.5054 16.9559 18.2314 16.8819 17.8184L16.3629 15.0194C16.2759 14.5064 16.4389 13.9824 16.8029 13.6114L20.4729 9.90538L15.4129 9.12038C14.8999 9.03738 14.4649 8.69738 14.2599 8.22038L12.0079 3.55138L9.7279 8.29438C9.5229 8.77238 9.0879 9.11138 8.5749 9.19438L3.5319 9.96038L7.1749 13.6604C7.5379 14.0254 7.7009 14.5424 7.6149 15.0494L6.7349 20.2434L11.2579 17.8174C11.7059 17.5654 12.2529 17.5654 12.7009 17.8174L17.8319 20.5234C18.1449 20.6944 18.3039 21.0554 18.2189 21.4024C18.1409 21.7494 17.8349 21.9964 17.4799 22.0024L17.4979 21.9194Z"
                fill="hsl(45, 100%, 50%)"
              />
            </Icon>
          </SaveImage>
        </Footer>
      </ModalContent>
    </ModalWrapper>,
    document.getElementById('modal')
  );
}

const mapDispatchToProps = { toggleSavePhoto };

export default connect(null, mapDispatchToProps)(Modal);
