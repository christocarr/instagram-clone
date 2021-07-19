import Photo from '../Photo';

function PhotoList({ photos }) {
  return (
    <ul>
      {photos.map((photo) => (
        <li key={photo.id}>
          <Photo photo={photo} />
        </li>
      ))}
    </ul>
  );
}

export default PhotoList;
