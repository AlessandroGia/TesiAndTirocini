package it.unimol.vino.models.entity;

import jakarta.persistence.*;
import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "tesi")
public class Tesi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String titolo;

    @Column(nullable = false)
    private String stato;

    private String dataDiscussione;

    @ManyToOne
    @JoinColumn(name = "studente_id", nullable = false)
    private Utente studente;

    @ManyToOne
    @JoinColumn(name = "relatore_id", nullable = false)
    private Utente relatore;

    @ManyToOne
    @JoinColumn(name = "insegnamento_id", nullable = false)
    private Insegnamento insegnamento;
}
