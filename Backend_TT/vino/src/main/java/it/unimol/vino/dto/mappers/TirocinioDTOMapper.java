package it.unimol.vino.dto.mappers;

import it.unimol.vino.dto.TirocinioDTO;
import it.unimol.vino.models.entity.CollaboratoreTirocinio;
import it.unimol.vino.models.entity.Tirocinio;
import it.unimol.vino.models.enums.StatoTirocinio;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
@RequiredArgsConstructor
public class TirocinioDTOMapper implements Function<Tirocinio, TirocinioDTO> {
    private final UtenteDTOMapper utenteDTOMapper;

    @Override
    public TirocinioDTO apply(Tirocinio tirocinio) {
        return new TirocinioDTO(
                tirocinio.getId(),
                tirocinio.getLaboratorio().getNome(),
                tirocinio.getCorsoDiStudi().getNome(),
                "Prof. " + tirocinio.getTutor().getNome() + " " + tirocinio.getTutor().getCognome(),
                tirocinio.getStudente().getNome() + " " + tirocinio.getStudente().getCognome(),
                tirocinio.getCompletamento(),
                tirocinio.getDurata(),
                tirocinio.getCfu(),
                tirocinio.getStatoTirocinio().equals(StatoTirocinio.DA_APPROVARE) ? StatoTirocinio.DA_APPROVARE.toString() : (
                        tirocinio.getStatoTirocinio().equals(StatoTirocinio.IN_CORSO) ? StatoTirocinio.IN_CORSO.toString() : StatoTirocinio.COMPLETATO.toString()
                ),
                tirocinio.getCollaboratori().stream().map(CollaboratoreTirocinio::getCollaboratore).map(this.utenteDTOMapper).toList()
        );
    }
}
