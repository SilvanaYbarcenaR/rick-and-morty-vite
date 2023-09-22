const episodes = require("../../episodes");

const getEpisodesVideo = async (req, res) => {
    try {
        const episodesObj = await episodes;
        return res.status(200).json(episodesObj);
    }
    catch(error) {
        res.status(error.response.status).send(error.response.data.error)
    }
}

module.exports = {
    getEpisodesVideo
};