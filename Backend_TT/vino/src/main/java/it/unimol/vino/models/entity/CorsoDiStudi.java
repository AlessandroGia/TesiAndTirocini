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
@Table(name = "corso_di_studi")
public class CorsoDiStudi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String codEsse3;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private String dipartimento;
}
