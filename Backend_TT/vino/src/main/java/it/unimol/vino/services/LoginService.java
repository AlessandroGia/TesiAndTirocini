package it.unimol.vino.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import it.unimol.vino.exceptions.PasswordNotValidException;
import it.unimol.vino.models.entity.Utente;
import it.unimol.vino.models.enums.Ruolo;
import it.unimol.vino.models.request.LoginRequest;
import it.unimol.vino.models.response.LoginResponse;
import it.unimol.vino.repository.UtenteRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LoginService {
    private final UtenteRepository utenteRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private Utente utente;

    public LoginResponse login(@Valid LoginRequest loginRequest) {
        Optional<Utente> utenteRichiesto = this.utenteRepository.findByNomeUtente(loginRequest.getNomeUtente());

        String jwt;
        String jwtEsse3;

        if (utenteRichiesto.isEmpty()) {
            try {
                jwtEsse3 = loginEsse3(loginRequest, true);
            } catch (JsonProcessingException e) {
                throw new RuntimeException(e);
            }

            jwt = this.jwtService.generateToken(this.utente);

            return LoginResponse.builder()
                    .jwt(jwt)
                    .jwtEsse3(jwtEsse3)
                    .build();
        }

        if (!this.passwordEncoder.matches(loginRequest.getPassword(), utenteRichiesto.get().getPassword()))
            throw new PasswordNotValidException("Password errata!");

        if (utenteRichiesto.get().getRuolo().equals(Ruolo.STUDENTE)) {
            try {
                jwtEsse3 = this.loginEsse3(loginRequest, false);
            } catch (JsonProcessingException e) {
                throw new RuntimeException(e);
            }
        }
        else
            jwtEsse3 = null;

        jwt = this.jwtService.generateToken(utenteRichiesto.get());

        return LoginResponse.builder()
                .jwt(jwt)
                .jwtEsse3(jwtEsse3)
                .build();
    }

    private String loginEsse3(LoginRequest loginRequest, boolean utenteDaRegistrare) throws JsonProcessingException {
        String url = "https://unimol.esse3.cineca.it/e3rest/api/login";
        String nomeUtente = loginRequest.getNomeUtente();
        String password = loginRequest.getPassword();

        HttpHeaders headers = new HttpHeaders();
        headers.setBasicAuth(nomeUtente, password);
        headers.set("accept", "application/json");
        headers.set("X-Esse3-permit-invalid-jsessionid", "true");
        HttpEntity<String> entity = new HttpEntity<>(headers);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);

        if (response.getStatusCode().is2xxSuccessful()) {
            String responseBody = response.getBody();

            if (utenteDaRegistrare) {
                this.registraUtente(responseBody, loginRequest);
            }

            return this.getJwtEsse3(responseBody);
        } else
            return null;
    }

    private void registraUtente(String responseBody, LoginRequest loginRequest) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(responseBody);

        String nome = jsonNode.get("user").get("firstName").asText();
        String cognome = jsonNode.get("user").get("lastName").asText();
        int grpId = jsonNode.get("user").get("grpId").asInt();

        this.utente = Utente.builder()
                .nome(nome)
                .cognome(cognome)
                .nomeUtente(loginRequest.getNomeUtente())
                .password(this.passwordEncoder.encode(loginRequest.getPassword()))
                .ruolo(grpId == 6 ? Ruolo.STUDENTE : Ruolo.DOCENTE)
                .build();

        this.utenteRepository.save(utente);
    }

    private String getJwtEsse3(String responseBody) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(responseBody);

        return jsonNode.get("authToken").asText();
    }
}
