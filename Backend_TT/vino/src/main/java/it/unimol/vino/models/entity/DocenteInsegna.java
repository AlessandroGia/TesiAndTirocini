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
@Table(name = "docente_insegna")
public class DocenteInsegna {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String codDocente;

    @ManyToOne
    @JoinColumn(name = "docente_id", nullable = false)
    private Utente docente;

    @ManyToOne
    @JoinColumn(name = "insegnamento_id", nullable = false)
    private Insegnamento insegnamento;
}
