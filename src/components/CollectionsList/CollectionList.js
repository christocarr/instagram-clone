import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  PostText,
  CollectionImage,
} from './CollectionList.Style';

function CollectionList({ collections, searchTerm }) {
  return (
    <List>
      {collections.map((collection) => (
        <Link
          to={`/collection/${searchTerm}/${collection.id}`}
          key={collection.id}
        >
          <ListItem>
            <CollectionImage
              src={collection.cover_photo.urls.small}
              alt="collection cover"
            />
            <PostText>{`${collection.total_photos} photos`}</PostText>
          </ListItem>
        </Link>
      ))}
    </List>
  );
}

export default CollectionList;
