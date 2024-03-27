package it.unimol.vino.models.entity;

import it.unimol.vino.models.enums.StatoTesi;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

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

    private String titolo;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private StatoTesi statoTesi;

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

    @OneToMany(mappedBy = "tesi")
    List<CorrelatoreTesi> correlatori;
}
