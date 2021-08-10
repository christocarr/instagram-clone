import { Link, useLocation } from 'react-router-dom';
import { Image } from './Photo.Styles';

function Photo({ photo }) {
  const location = useLocation();
  return (
    <>
      <Link
        to={{
          pathname: `/modal/${photo.id}`,
          state: {
            background: location,
            modal: true,
            imageUrl: photo.urls.small,
            imageAlt: photo.description,
            profileImage: photo.user.profile_image.medium,
            userName: photo.user.username,
            name: photo.user.name,
            createdAt: photo.created_at,
            photoInfo: photo,
          },
        }}
      >
        <Image src={photo.urls.small} alt={photo.description} />
      </Link>
    </>
  );
}

export default Photo;
