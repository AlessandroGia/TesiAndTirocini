package it.unimol.vino.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;

import java.util.List;

@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public record TesiDTO(
        Long id,
        String titolo,
        String insegnamento,
        String cDS,
        String dataDiscussione,
        String relatore,
        String studente,
        String statoTesi,
        List<UtenteDTO> correlatori
) {}
