package com.elyx.health.dto;

import lombok.Data;

@Data
public class InternalMetricDTO {
    private Long id;
    private Long journeyId;
    private String metricType;     // e.g., "Doctor Consult Hours", "Coach Hours"
    private double value;
    private String date;
}