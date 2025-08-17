package com.elyx.health.dto.request;

import lombok.Data;
import java.time.LocalDate;

@Data
public class CreatePlanRequest {
    private Long journeyId;
    private LocalDate effectiveFrom;
    private LocalDate effectiveTo;
    private Double adherencePercent;
    private Integer exerciseMinutesPerWeek;
    private String nutritionNotes;
}
