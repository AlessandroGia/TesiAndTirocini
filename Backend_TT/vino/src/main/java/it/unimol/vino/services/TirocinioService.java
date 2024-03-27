package it.unimol.vino.services;

import it.unimol.vino.dto.TirocinioDTO;
import it.unimol.vino.dto.mappers.HomeTirocinioDTOMapper;
import it.unimol.vino.dto.mappers.TirocinioDTOMapper;
import it.unimol.vino.exceptions.UserNotFoundException;
import it.unimol.vino.models.entity.CollaboratoreTirocinio;
import it.unimol.vino.models.entity.Tirocinio;
import it.unimol.vino.models.entity.Utente;
import it.unimol.vino.models.enums.Ruolo;
import it.unimol.vino.repository.CollaboratoreTirocinioRepository;
import it.unimol.vino.repository.TirocinioRepository;
import it.unimol.vino.repository.UtenteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TirocinioService {
    private final TirocinioRepository tirocinioRepository;
    private final UtenteRepository utenteRepository;
    private final CollaboratoreTirocinioRepository collaboratoreTirocinioRepository;
    private final HomeTirocinioDTOMapper homeTirocinioDTOMapper;
    private final TirocinioDTOMapper tirocinioDTOMapper;

    public List<TirocinioDTO> getTirociniByUtente() {
        Utente utente = (this.utenteRepository.findUtenteByNomeUtente(SecurityContextHolder.getContext().getAuthentication().getName()))
                .orElseThrow(() -> new UserNotFoundException(""));

        List<Tirocinio> tirociniEstratti;

        if (utente.getRuolo().equals(Ruolo.STUDENTE)) {
            tirociniEstratti = this.tirocinioRepository.findAllByStudente(utente);

            for (CollaboratoreTirocinio ct : this.collaboratoreTirocinioRepository.findAllByCollaboratore(utente))
                tirociniEstratti.add(ct.getTirocinio());
        } else if (utente.getRuolo().equals(Ruolo.DOCENTE)) {
            tirociniEstratti = this.tirocinioRepository.findAllByTutor(utente);

            for (CollaboratoreTirocinio ct : this.collaboratoreTirocinioRepository.findAllByCollaboratore(utente))
                tirociniEstratti.add(ct.getTirocinio());
        } else {
            tirociniEstratti = new ArrayList<>();

            for (CollaboratoreTirocinio ct : this.collaboratoreTirocinioRepository.findAllByCollaboratore(utente))
                tirociniEstratti.add(ct.getTirocinio());
        }

        return tirociniEstratti.stream().map(homeTirocinioDTOMapper).toList();
    }
}
