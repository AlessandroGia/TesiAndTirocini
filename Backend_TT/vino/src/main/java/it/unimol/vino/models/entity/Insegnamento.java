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
@Table(name = "insegnamento")
public class Insegnamento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String codEsse3;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private int annoDiCorso;

    @Column(nullable = false)
    private int annoOfferta;

    @ManyToOne
    @JoinColumn(name = "corso_di_studi_id", nullable = false)
    private CorsoDiStudi corsoDiStudi;
}
