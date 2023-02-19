import responseHandler from "../handlers/response.handler";
import tmdbApi from "../tmbd/tmdb.api.js";

const personDetail = async (req, res) => {
  try {
    const { personId } = req.params;

    const person = await tmdbApi.personDetail({ personId });

    responseHandler.ok(res, person);
  } catch (error) {
    responseHandler.error(res);
  }
};

const personMedias = async (req, res) => {
  try {
    const { personId } = req.params;

    const medias = await tmdbApi.personMedias({ personId });
    responseHandler.ok(res, medias);
  } catch (error) {
    responseHandler.error(res);
  }
};

export default { personDetail, personMedias };
