import Photo from '../Photo';
import { List, ListItem } from './PhotoList.Styles';

function PhotoList({ photos }) {
  return (
    <List>
      {photos.map((photo) => (
        <ListItem key={photo.id}>
          <Photo photo={photo} />
        </ListItem>
      ))}
    </List>
  );
}

export default PhotoList;
