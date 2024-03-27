package it.unimol.vino.controllers;

import it.unimol.vino.dto.TesiDTO;
import it.unimol.vino.services.TesiService;
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
@RequestMapping("/api/v1/tesi")
@RequiredArgsConstructor
public class TesiController {
    private final TesiService tesiService;

    @GetMapping("/home")
    public ResponseEntity<List<TesiDTO>> getTesiByUtente(HttpServletRequest servletRequest) {
        Logger.getLogger().info(Network.getClientIp(servletRequest) + " sta richiedendo la home tesi");
        return ResponseEntity.ok(this.tesiService.getTesiByUtente());
    }

    @GetMapping
    public ResponseEntity<TesiDTO> getTesi(@Valid Long id, HttpServletRequest servletRequest) {
        Logger.getLogger().info(Network.getClientIp(servletRequest) + " sta richiedendo la tesi" + id);
        return ResponseEntity.ok(this.tesiService.getTesi(id));
    }
}
