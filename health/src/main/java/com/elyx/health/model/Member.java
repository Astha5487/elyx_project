package com.elyx.health.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "members")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    @Column(unique = true, nullable = false)
    private String email;

    private String residence;           // e.g., Singapore
    private String chronicCondition;    // optional, e.g., high BP

    @Builder.Default
    private Integer weeklyCommitmentHours = 5; // avg commitment

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<Journey> journeys = new ArrayList<>();
}
