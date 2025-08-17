package com.elyx.health.dto.request;

import com.elyx.health.model.enums.DecisionType;
import lombok.Data;

@Data
public class CreateDecisionRequest {
    private Long journeyId;
    private DecisionType decisionType;       // <-- change String → Enum
    private String reason;
    private Long triggeredByCommunicationId;
}
