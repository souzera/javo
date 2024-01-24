import { Equipe, sampleEquipes } from "@/types/equipe";

export default function addEquipe(equipe: Equipe) {
    return sampleEquipes.push(equipe);
}