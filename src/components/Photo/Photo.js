import { Link } from 'react-router-dom';
import { Image } from './Photo.Styles';

function Photo({ photo }) {
  return (
    <Link to={`/users/${photo.user.username}`}>
      <Image src={photo.urls.thumb} alt={photo.description} />
    </Link>
  );
}

export default Photo;
