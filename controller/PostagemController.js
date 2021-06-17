const db = require("../db");

const get = async(req, res) => res.json(await db.findAll());

const getById = async(req, res) => {
    try {
        return res.json(await db.findById(req.params.id));
    } catch (error) {
        return res.status(500).json(error);
    }
}

const post = async(req, res) => {
    const { conteudo } = req.body;
    const novaPostagem = await db.save({ conteudo });
    return res.status(201).json(novaPostagem);
};

const put = async(req, res) => {
    try {
        const id = req.params.id;
        const { conteudo } = req.body;
        const postagem = await db.update(id, { conteudo });
        res.status(201).json(postagem);
    } catch (error) {
        res.status(500).json(error);
    }
};

const deletePost = async(req, res) => {
    try {
        const id = req.params.id;
        await db.delete(id);
        res.status(200).json();
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {get, getById, post, put, delete: deletePost };