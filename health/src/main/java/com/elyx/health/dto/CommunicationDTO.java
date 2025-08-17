package com.elyx.health.dto;

import lombok.Data;

@Data
public class CommunicationDTO {
    private Long id;
    private Long journeyId;
    private String sender;        // "Member" or "Elyx Team"
    private String message;
    private String timestamp;
}