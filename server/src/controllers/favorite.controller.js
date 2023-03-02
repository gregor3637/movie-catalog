import responseHandler from "../handlers/response.handler.js";
import favoriteModel from "../models/favorite.model.js";

const addFavorite = async (req, res) => {
  try {
    const isFavorite = await favoriteModel.findOne({
      user: req.user.id,
      mediaId: req.body.mediaId,
    });

    if (isFavorite) return responseHandler.ok(res, isFavorite);

    const favorite = new favoriteModel({
      ...req.body,
      user: req.user.id ,
    });
   
    await favorite.save();

    responseHandler.created(res, favorite);
  } catch (error) {
    responseHandler.error(res);
  }
};

const removeFavorite = async (req, res) => {
  try {
    const { favoriteId } = req.params;
    console.log("🚀 ~ file: favorite.controller.js:29 ~ removeFavorite ~ favoriteId:", favoriteId)
    console.log("🚀 ~ file: favorite.controller.js:29 ~ removeFavorite ~ req.user.id:", req.user.id)

    console.log("🚀 ~ file:000000000000 :");
    const fav = await favoriteModel.findOne({
      user: req.user.id,
      mediaId: favoriteId.toString()
    });
    console.log("🚀 ~ file:11111111111 :");

    if (!fav) return responseHandler.notfound(res);

    await fav.remove();

    responseHandler.ok(res);
  } catch (error) {
    console.log('errrrrrrrrrrrrrrrrrrrrrrr')
    responseHandler.error(res);
  }
};

const getFavoritesOfUser = async (req, res) => {
  try {
    const favorite = await favoriteModel
      .find({ user: req.user.id })
      .sort("-createdAt");

    responseHandler.ok(res, favorite);
  } catch (err) {
    responseHandler.error(res);
  }
};

export default {
  addFavorite,
  removeFavorite,
  getFavoritesOfUser,
};
