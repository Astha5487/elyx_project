package com.elyx.health.dto;

import lombok.Data;

@Data
public class DiagnosticTestDTO {
    private Long id;
    private Long journeyId;
    private String testName;      // e.g., "Full Blood Panel"
    private String resultSummary;
    private String testDate;
}