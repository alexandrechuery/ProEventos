import { Evento } from "./Evento";
import { RedeSocial } from "./RedeSocial";

export default interface Palestrante {
    id: number;
    nome: string;
    miniCurriulo: string;
    imagemURL: string;
    telefone: string;
    email: string;
    redesSociais: RedeSocial[];
    palestrantesEventos: Evento[];

}
