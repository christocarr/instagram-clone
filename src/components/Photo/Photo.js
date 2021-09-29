import { ImageContainer, Image } from './Photo.Styles';

function Photo({ photo, page }) {
  return (
    <ImageContainer bgColor={photo.color} page={page}>
      <Image
        src={photo.urls.small}
        alt={photo.description}
        width={photo.width}
        height={photo.height}
      />
    </ImageContainer>
  );
}

export default Photo;
