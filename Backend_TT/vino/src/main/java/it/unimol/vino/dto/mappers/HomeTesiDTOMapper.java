package it.unimol.vino.dto.mappers;

import it.unimol.vino.dto.HomeTesiDTO;
import it.unimol.vino.models.entity.Tesi;
import it.unimol.vino.models.enums.StatoTesi;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class HomeTesiDTOMapper implements Function<Tesi, HomeTesiDTO> {

    @Override
    public HomeTesiDTO apply(Tesi tesi) {
        return new HomeTesiDTO(
                tesi.getId(),
                tesi.getTitolo(),
                tesi.getInsegnamento().getNome(),
                tesi.getInsegnamento().getCorsoDiStudi().getNome(),
                tesi.getDataDiscussione(),
                tesi.getRelatore().getNome() + " " + tesi.getRelatore().getCognome(),
                tesi.getStudente().getNome() + " " + tesi.getStudente().getCognome(),
                tesi.getStatoTesi().equals(StatoTesi.DA_APPROVARE) ? StatoTesi.DA_APPROVARE.toString() : (
                        tesi.getStatoTesi().equals(StatoTesi.IN_CORSO) ? StatoTesi.IN_CORSO.toString() : (
                                tesi.getStatoTesi().equals(StatoTesi.CONCLUSA) ? StatoTesi.CONCLUSA.toString() : StatoTesi.ARCHIVIATA.toString()
                                )
                        )
        );
    }
}
