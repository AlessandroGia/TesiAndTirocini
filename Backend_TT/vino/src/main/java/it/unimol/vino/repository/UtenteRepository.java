package it.unimol.vino.repository;

import it.unimol.vino.models.entity.Utente;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UtenteRepository extends JpaRepository<Utente, Long> {

    Optional<Utente> findUtenteByNomeUtente(String nomeUtente);
}
