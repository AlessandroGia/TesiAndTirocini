package it.unimol.vino.models.entity;

import it.unimol.vino.models.enums.StatoTirocinio;
import jakarta.persistence.*;
import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "tirocinio")
public class Tirocinio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private StatoTirocinio statoTirocinio;

    @Column(nullable = false)
    private int durata;

    @Column(nullable = false)
    private float completamento;

    @Column(nullable = false)
    private int cfu;

    @ManyToOne
    @JoinColumn(name = "studente_id", nullable = false)
    private Utente studente;

    @ManyToOne
    @JoinColumn(name = "tutor_id", nullable = false)
    private Utente tutor;

    @ManyToOne
    @JoinColumn(name = "corso_di_studi_id", nullable = false)
    private CorsoDiStudi corsoDiStudi;

    @ManyToOne
    @JoinColumn(name = "laboratorio_id", nullable = false)
    private Laboratorio laboratorio;
}
