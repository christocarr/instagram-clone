function Photo({ photo }) {
  return (
    <div>
      <img src={photo.urls.thumb} alt={photo.description} />
    </div>
  );
}

export default Photo;
