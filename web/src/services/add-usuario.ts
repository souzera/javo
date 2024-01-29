import { Usuario, sampleUsers } from "@/types/usuario";

export default function addUsuario(usuario: Usuario) {
    return sampleUsers.push(usuario);
}