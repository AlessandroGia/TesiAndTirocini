package it.unimol.vino.repository;

import it.unimol.vino.models.entity.CollaboratoreTirocinio;
import it.unimol.vino.models.entity.Utente;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CollaboratoreTirocinioRepository extends JpaRepository<CollaboratoreTirocinio, Long> {

    List<CollaboratoreTirocinio> findAllByCollaboratore(Utente utente);
}
