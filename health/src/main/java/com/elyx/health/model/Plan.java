package com.elyx.health.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "plans")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Plan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate effectiveFrom;
    private LocalDate effectiveTo;

    // adherence tracked per plan window
    private Double adherencePercent; // 0-100
    private Integer exerciseMinutesPerWeek;
    private String nutritionNotes;

    @ManyToOne(optional = false)
    @JoinColumn(name = "journey_id")
    private Journey journey;

    @OneToMany(mappedBy = "plan", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<ExerciseSession> exerciseSessions = new ArrayList<>();
}
