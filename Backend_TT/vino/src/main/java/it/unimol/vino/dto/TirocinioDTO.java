package it.unimol.vino.dto;

import lombok.Builder;

import java.util.List;

@Builder
public record TirocinioDTO(
        Long id,
        String laboratorio,
        String cDS,
        String tutor,
        String studente,
        float completamento,
        int durata,
        int cfu,
        String statoTirocinio,
        List<UtenteDTO> collaboratori
) {}
