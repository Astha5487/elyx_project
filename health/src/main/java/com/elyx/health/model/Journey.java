package com.elyx.health.model;

import jakarta.persistence.*;
import lombok.Builder;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Builder
@Entity
public class Journey {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate startDate;
    private LocalDate endDate;

    @ManyToOne(optional = false)
    @JoinColumn(name = "member_id")
    private Member member;

    // Dynamic plan snapshots over time
    @OneToMany(mappedBy = "journey", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<Plan> plans = new ArrayList<>();

    // Communication stream (WhatsApp-style)
    @OneToMany(mappedBy = "journey", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<Communication> communications = new ArrayList<>();

    // Decisions with rationale (why something changed)
    @OneToMany(mappedBy = "journey", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<Decision> decisions = new ArrayList<>();

    // Diagnostics (every ~3 months)
    @OneToMany(mappedBy = "journey", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<DiagnosticTest> diagnostics = new ArrayList<>();

    // Internal metrics (e.g., coach/doctor hours)
    @OneToMany(mappedBy = "journey", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<InternalMetric> internalMetrics = new ArrayList<>();
}
