package it.unimol.vino.services;

import it.unimol.vino.dto.TesiDTO;
import it.unimol.vino.dto.mappers.HomeTesiDTOMapper;
import it.unimol.vino.dto.mappers.TesiDTOMapper;
import it.unimol.vino.exceptions.UserNotFoundException;
import it.unimol.vino.models.entity.CorrelatoreTesi;
import it.unimol.vino.models.entity.Tesi;
import it.unimol.vino.models.entity.Utente;
import it.unimol.vino.models.enums.Ruolo;
import it.unimol.vino.repository.CorrelatoreTesiRepository;
import it.unimol.vino.repository.TesiRepository;
import it.unimol.vino.repository.UtenteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TesiService {
    private final TesiRepository tesiRepository;
    private final UtenteRepository utenteRepository;
    private final CorrelatoreTesiRepository correlatoreTesiRepository;
    private final HomeTesiDTOMapper homeTesiDTOMapper;
    private final TesiDTOMapper tesiDTOMapper;

    public List<TesiDTO> getTesiByUtente() {
        Utente utente = (this.utenteRepository.findUtenteByNomeUtente(SecurityContextHolder.getContext().getAuthentication().getName())
                .orElseThrow(() -> new UserNotFoundException("")));

        List<Tesi> tesiEstratte;

        if (utente.getRuolo().equals(Ruolo.STUDENTE)) {
            tesiEstratte = this.tesiRepository.findAllByStudente(utente);

            for (CorrelatoreTesi ct : this.correlatoreTesiRepository.findAllByCorrelatore(utente))
                tesiEstratte.add(ct.getTesi());
        } else if (utente.getRuolo().equals(Ruolo.DOCENTE)) {
            tesiEstratte = this.tesiRepository.findAllByRelatore(utente);

            for (CorrelatoreTesi ct : this.correlatoreTesiRepository.findAllByCorrelatore(utente))
                tesiEstratte.add(ct.getTesi());
        } else {
            tesiEstratte = new ArrayList<>();

            for (CorrelatoreTesi ct : this.correlatoreTesiRepository.findAllByCorrelatore(utente))
                tesiEstratte.add(ct.getTesi());
        }

        return tesiEstratte.stream().map(homeTesiDTOMapper).toList();
    }

    public TesiDTO getTesi(Long id) {
        return this.tesiDTOMapper.apply(this.tesiRepository.findTesiById(id));
    }
}
