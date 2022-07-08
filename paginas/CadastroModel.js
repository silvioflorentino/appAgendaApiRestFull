import Api from '../paginas/Api';

export async function visualizarContatos(id){
    try {
        const resultados = await Api.get(`/contatos/${id}/`);
        return resultados.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function cadastrarContatos(id,nome,fone,email){
    try {
        const resultados = await Api.put(`/contatos/${id}/`);
        return resultados.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}