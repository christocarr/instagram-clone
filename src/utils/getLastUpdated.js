function getLastUpdated(createdAt) {
  const dateNow = Date.now();
  const dateCreated = Date.parse(createdAt);

  const diff = Math.abs(dateNow - dateCreated) / 1000;
  const hours = Math.floor(diff / 3600) % 24;

  return `${hours} ${hours < 2 ? 'hour' : 'hours'} ago`;
}

export default getLastUpdated;
