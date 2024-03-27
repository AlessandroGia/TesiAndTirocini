package it.unimol.vino.services;

import it.unimol.vino.dto.UtenteDTO;
import it.unimol.vino.exceptions.UserNotFoundException;
import it.unimol.vino.models.entity.Utente;
import it.unimol.vino.repository.UtenteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UtenteService {
    private final UtenteRepository utenteRepository;

    public UtenteDTO getUtente() {
        Utente utente = this.utenteRepository.findUtenteByNomeUtente(SecurityContextHolder.getContext().getAuthentication().getName())
                .orElseThrow(() -> new UserNotFoundException(""));

        return UtenteDTO.builder()
                .id(utente.getId())
                .nome(utente.getNome())
                .cognome(utente.getCognome())
                .ruolo(utente.getRuolo().toString())
                .build();
    }
}
