package it.unimol.vino.repository;

import it.unimol.vino.models.entity.CorrelatoreTesi;
import it.unimol.vino.models.entity.Utente;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CorrelatoreTesiRepository extends JpaRepository<CorrelatoreTesi, Long> {

    List<CorrelatoreTesi> findAllByCorrelatore(Utente utente);
}
