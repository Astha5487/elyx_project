package com.elyx.health.dto.request;

import lombok.Data;

import java.time.LocalDate;

@Data
public class CreateJourneyRequest {
    private Long memberId;
    private LocalDate startDate;
    private LocalDate endDate;
}