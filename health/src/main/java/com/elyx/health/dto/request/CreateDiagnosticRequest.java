package com.elyx.health.dto.request;

import lombok.Data;

import java.time.LocalDate;

@Data
public class CreateDiagnosticRequest {
    private Long journeyId;       // The journey this test belongs to
    private String testName;      // e.g., "Full Blood Panel", "Lipid Profile"
    private String results;       // Summary or JSON of biomarker results
    private LocalDate testDate;   // When the test was done
    private String orderedBy;
    private String panelName;
    private String highlights;
}