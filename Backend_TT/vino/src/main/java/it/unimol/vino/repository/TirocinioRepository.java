package it.unimol.vino.repository;

import it.unimol.vino.models.entity.Tirocinio;
import it.unimol.vino.models.entity.Utente;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TirocinioRepository extends JpaRepository<Tirocinio, Long> {

    List<Tirocinio> findAllByStudente(Utente utente);

    List<Tirocinio> findAllByTutor(Utente utente);

    Tirocinio findTirocinioById(Long id);
}
