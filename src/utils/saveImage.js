import useLocalStorage from './useLocalStorage';

function SaveImage(content) {
  const [photos, setPhotos] = useLocalStorage('savedImages', []);

  const imageExists = photos.find((ph) => ph.id === content.id);
  if (imageExists) {
    const photosArr = photos.filter((ph) => ph.id !== content.id);
    setPhotos(photosArr);
  }
  if (!imageExists) {
    const photosArr = [...photos, content];
    setPhotos(photosArr);
  }
}

export default SaveImage;
