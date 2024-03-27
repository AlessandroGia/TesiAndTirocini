package it.unimol.vino.repository;

import it.unimol.vino.models.entity.Tesi;
import it.unimol.vino.models.entity.Utente;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TesiRepository extends JpaRepository<Tesi, Long> {

    List<Tesi> findAllByStudente(Utente utente);

    List<Tesi> findAllByRelatore(Utente utente);

    Tesi findTesiById(Long id);
}
