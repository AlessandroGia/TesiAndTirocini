package it.unimol.vino.controllers;

import it.unimol.vino.dto.UtenteDTO;
import it.unimol.vino.services.UtenteService;
import it.unimol.vino.utils.Logger;
import it.unimol.vino.utils.Network;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/utente")
@RequiredArgsConstructor
public class UtenteController {
    private final UtenteService utenteService;

    @GetMapping
    public ResponseEntity<UtenteDTO> getUtente(HttpServletRequest servletRequest) {
        Logger.getLogger().info(Network.getClientIp(servletRequest) + " sta richiedendo i dati utente");
        return ResponseEntity.ok(this.utenteService.getUtente());
    }
}
