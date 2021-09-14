import { ImageContainer, Image } from './Photo.Styles';

function Photo({ photo }) {
  console.log(photo)
  return (
    <ImageContainer bgColor={photo.color}>
      <Image src={photo.urls.small} alt={photo.description} />
    </ImageContainer>
  );
}

export default Photo;
