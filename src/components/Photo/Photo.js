import { Image } from './Photo.Styles';

function Photo({ photo }) {
  return <Image src={photo.urls.small} alt={photo.description} />;
}

export default Photo;
