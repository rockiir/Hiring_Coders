interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser() {
    return {
        nome: 'Vitor',
        email:'vitor@vitor.com'
    }
}

function setUser(usuario: Usuario) {

} 