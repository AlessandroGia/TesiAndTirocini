package it.unimol.vino.dto;

import lombok.Builder;

@Builder
public record HomeTirocinioDTO(
        Long id,
        String laboratorio,
        String cDS,
        String tutor,
        String studente,
        float completamento,
        int durata,
        int cfu,
        String statoTirocinio
) {}
