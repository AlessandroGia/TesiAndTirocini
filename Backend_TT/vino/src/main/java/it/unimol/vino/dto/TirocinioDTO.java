package it.unimol.vino.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;

import java.util.List;

@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public record TirocinioDTO(
        Long id,
        String laboratorio,
        String cDS,
        String tutor,
        String studente,
        String statoTirocinio,
        int durata,
        float completamento,
        int cfu,
        List<UtenteDTO> collaboratori
) {}
