package com.elyx.health.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "exercise_sessions")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ExerciseSession {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate sessionDate;
    private String type;       // e.g., cardio, strength, yoga
    private Integer duration;  // minutes
    private String intensity;  // e.g., low/med/high or RPE

    @ManyToOne(optional = false)
    @JoinColumn(name = "plan_id")
    private Plan plan;
}
