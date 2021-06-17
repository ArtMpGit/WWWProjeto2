const postagens = [];
var contador = 0;

const findAll = () => new Promise((resolve, reject) => resolve(postagens));

const findById = (id) => new Promise((resolve, reject) =>
    resolve(postagens.filter(postagem => postagem.id === parseInt(id))[0]));

const save = (postagem) => new Promise((resolve, reject) => {
    const id = Number(contador++);
    postagens.push({ id, ...postagem });
    resolve(postagem);
});

const update = (id, postagem) => new Promise((resolve, reject) => {
    const index = postagens.findIndex(postagem => postagem.id === parseInt(id));
    postagens[index] = { id: parseInt(id), ...postagem };
    resolve(postagens[index]);
});

const deletePostagem = (id) => new Promise((resolve, reject) => {
    const index = postagens.findIndex(postagem => postagem.id === parseInt(id));
    postagens.splice(index, 1);
    resolve();
});


module.exports = { findAll, findById, save, update, delete: deletePostagem };