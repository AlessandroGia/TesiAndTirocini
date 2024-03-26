package it.unimol.vino.controllers;

import it.unimol.vino.models.request.LoginRequest;
import it.unimol.vino.models.response.LoginResponse;
import it.unimol.vino.services.LoginService;
import it.unimol.vino.utils.Logger;
import it.unimol.vino.utils.Network;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/login")
@RequiredArgsConstructor
public class LoginController {
    private final LoginService loginService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(
            @RequestBody @Valid LoginRequest loginRequest,
            HttpServletRequest servletRequest
    ) {
        Logger.getLogger().info(Network.getClientIp(servletRequest) + " is requesting user authentication");
        return ResponseEntity.ok(this.loginService.login(loginRequest));
    }
}
