package com.elyx.health.dto;

import lombok.Data;

@Data
public class DecisionDTO {
    private Long id;
    private Long journeyId;
    private String decisionType;    // e.g., "Medication", "Therapy", "Exercise Update"
    private String rationale;       // why this decision was made
    private String timestamp;
}
