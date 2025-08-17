package com.elyx.health.dto.request;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class CreateMessageRequest {
    private Long journeyId;
    private String sender;
    private String message;
    private String channel;
    private LocalDateTime timestamp;
}
