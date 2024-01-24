import { Usuario, sampleUsers } from "@/types/usuario";

export default function AddUsuario(usuario: Usuario) {
    return sampleUsers.push(usuario);
}