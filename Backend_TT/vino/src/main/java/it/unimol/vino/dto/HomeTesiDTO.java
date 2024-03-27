package it.unimol.vino.dto;

import lombok.Builder;

@Builder
public record HomeTesiDTO(
        Long id,
        String titolo,
        String insegnamento,
        String cDS,
        String dataDiscussione,
        String relatore,
        String studente,
        String statoTesi
) {}
