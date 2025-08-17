package com.elyx.health.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "internal_metrics")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InternalMetric {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate date;
    private Integer doctorMinutes;  // consult minutes that day
    private Integer coachMinutes;   // coach time that day
    private Integer dataReviewMinutes; // analysts/research review

    @ManyToOne(optional = false)
    @JoinColumn(name = "journey_id")
    private Journey journey;
}
