const favoriteUtils = {
  check: ({ listFavorites, mediaId }) => {
    return (
      listFavorites &&
      listFavorites.find((e) => e.mediaId.toString() === mediaId.toString()) !==
        undefined
    );
  },
};

export default favoriteUtils;
