package com.elyx.health.dto;

import lombok.Data;

@Data
public class ExerciseSessionDTO {
    private Long id;
    private Long planId;
    private String exerciseType;   // e.g., "Cardio", "Yoga"
    private int durationMinutes;
    private String intensity;      // e.g., "Low", "Moderate", "High"
    private String date;
}
