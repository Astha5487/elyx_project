package com.elyx.health.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "communications")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Communication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "journey_id", nullable = false)
    private Journey journey;

    private String sender;
    private String message;
    private String channel;
    private LocalDateTime timestamp;
}
