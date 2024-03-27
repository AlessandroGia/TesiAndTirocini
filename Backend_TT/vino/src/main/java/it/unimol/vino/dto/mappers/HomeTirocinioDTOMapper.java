package it.unimol.vino.dto.mappers;

import it.unimol.vino.dto.HomeTirocinioDTO;
import it.unimol.vino.models.entity.Tirocinio;
import it.unimol.vino.models.enums.StatoTirocinio;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class HomeTirocinioDTOMapper implements Function<Tirocinio, HomeTirocinioDTO> {

    public HomeTirocinioDTO apply(Tirocinio tirocinio) {
        return new HomeTirocinioDTO(
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
                        )
        );
    }
}
