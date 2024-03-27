package it.unimol.vino.dto.mappers;

import it.unimol.vino.dto.UtenteDTO;
import it.unimol.vino.models.entity.Utente;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class UtenteDTOMapper implements Function<Utente, UtenteDTO> {

    @Override
    public UtenteDTO apply(Utente utente) {
        return new UtenteDTO(
                utente.getId(),
                utente.getNome(),
                utente.getCognome(),
                utente.getRuolo().toString()
        );
    }
}
