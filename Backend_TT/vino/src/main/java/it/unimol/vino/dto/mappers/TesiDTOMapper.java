package it.unimol.vino.dto.mappers;

import it.unimol.vino.dto.TesiDTO;
import it.unimol.vino.models.entity.CorrelatoreTesi;
import it.unimol.vino.models.entity.Tesi;
import it.unimol.vino.models.enums.StatoTesi;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
@RequiredArgsConstructor
public class TesiDTOMapper implements Function<Tesi, TesiDTO> {
    private final UtenteDTOMapper utenteDTOMapper;

    @Override
    public TesiDTO apply(Tesi tesi) {
        return new TesiDTO(
                tesi.getId(),
                tesi.getTitolo(),
                tesi.getInsegnamento().getNome(),
                tesi.getInsegnamento().getCorsoDiStudi().getNome(),
                tesi.getDataDiscussione(),
                "Prof. " + tesi.getRelatore().getNome() + " " + tesi.getRelatore().getCognome(),
                tesi.getStudente().getNome() + " " + tesi.getStudente().getCognome(),
                tesi.getStatoTesi().equals(StatoTesi.DA_APPROVARE) ? StatoTesi.DA_APPROVARE.toString() : (
                        tesi.getStatoTesi().equals(StatoTesi.IN_CORSO) ? StatoTesi.IN_CORSO.toString() : (
                                tesi.getStatoTesi().equals(StatoTesi.CONCLUSA) ? StatoTesi.CONCLUSA.toString() : StatoTesi.ARCHIVIATA.toString()
                        )
                ),
                tesi.getCorrelatori().stream().map(CorrelatoreTesi::getCorrelatore).map(this.utenteDTOMapper).toList()
        );
    }
}
