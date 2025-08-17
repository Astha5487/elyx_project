package com.elyx.health.model;

import com.elyx.health.model.enums.DecisionType;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "decisions")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Decision {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private DecisionType decisionType;

    @Column(length = 2000)
    private String reason; // full rationale / traceability

    private LocalDateTime timestamp;

    // Optional: link to a communication that triggered this
    private Long triggeredByCommunicationId;

    @ManyToOne(optional = false)
    @JoinColumn(name = "journey_id")
    private Journey journey;
}
