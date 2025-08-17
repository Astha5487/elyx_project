package com.elyx.health.dto;

import lombok.Data;

@Data
public class PlanDTO {
    private Long id;
    private Long journeyId;
    private String planType;    // e.g., "Diet", "Exercise", "Therapy"
    private String description;
    private String status;      // e.g., "Ongoing", "Completed"
}