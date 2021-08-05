import { Link } from 'react-router-dom';
import { Image } from './Photo.Styles';

function Photo({ photo }) {
  return (
    <>
      {/* <Link to={`/users/${photo.user.username}`}> */}
      <Link
        to={{
          pathname: `/modal/${photo.id}`,
          state: {
            modal: true,
            imageUrl: photo.urls.small,
            imageAlt: photo.description,
            profileImage: photo.user.profile_image.medium,
            userName: `${photo.user.first_name} ${photo.user.last_name}`,
            createdAt: photo.created_at,
          },
        }}
      >
        <Image src={photo.urls.small} alt={photo.description} />
      </Link>
      {/* </Link> */}
    </>
  );
}

export default Photo;
