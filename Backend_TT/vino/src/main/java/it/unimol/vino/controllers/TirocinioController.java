package it.unimol.vino.controllers;

import it.unimol.vino.dto.TirocinioDTO;
import it.unimol.vino.services.TirocinioService;
import it.unimol.vino.utils.Logger;
import it.unimol.vino.utils.Network;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/tirocinio")
@RequiredArgsConstructor
public class TirocinioController {
    private final TirocinioService tirocinioService;

    @GetMapping("/home")
    public ResponseEntity<List<TirocinioDTO>> getTirociniByUtente(HttpServletRequest servletRequest) {
        Logger.getLogger().info(Network.getClientIp(servletRequest) + " sta richiedendo la home tirocinio");
        return ResponseEntity.ok(this.tirocinioService.getTirociniByUtente());
    }

    @GetMapping
    public ResponseEntity<TirocinioDTO> getTirocinio(@Valid Long id, HttpServletRequest servletRequest) {
        Logger.getLogger().info(Network.getClientIp(servletRequest) + " sta richiedendo il tirocinio" + id);
        return ResponseEntity.ok(this.tirocinioService.getTirocinio(id));
    }
}
