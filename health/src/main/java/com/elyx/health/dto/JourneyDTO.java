package com.elyx.health.dto;

import lombok.Data;

@Data
public class JourneyDTO {
    private Long id;
    private Long memberId;
    private String startDate;
    private String currentStatus;   // e.g., "Active", "Paused"
}
