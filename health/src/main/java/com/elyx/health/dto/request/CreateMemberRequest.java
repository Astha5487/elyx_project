package com.elyx.health.dto.request;

import lombok.Data;

@Data
public class CreateMemberRequest {
    private String fullName;
    private String email;
    private String residence;
    private String chronicCondition;
    private Integer weeklyCommitmentHours;
}
