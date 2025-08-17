package com.elyx.health.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "diagnostic_tests")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DiagnosticTest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "journey_id", nullable = false)
    private Journey journey;

    private LocalDate testDate;
    private String panelName;
    private String highlights;
}
