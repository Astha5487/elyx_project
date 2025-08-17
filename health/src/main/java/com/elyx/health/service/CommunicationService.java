package com.elyx.health.service;

import com.elyx.health.dto.request.CreateMessageRequest;
import com.elyx.health.exception.NotFoundException;
import com.elyx.health.model.Communication;
import com.elyx.health.model.Journey;
import com.elyx.health.repository.CommunicationRepository;
import com.elyx.health.repository.JourneyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CommunicationService {
    private final CommunicationRepository communicationRepository;
    private final JourneyRepository journeyRepository;

    public Communication create(CreateMessageRequest req) {
        Journey journey = journeyRepository.findById(req.getJourneyId())
                .orElseThrow(() -> new NotFoundException("Journey not found: " + req.getJourneyId()));

        Communication c = Communication.builder()
                .journey(journey)
                .sender(req.getSender())
                .message(req.getMessage())
                .channel(req.getChannel())
                .timestamp(req.getTimestamp() != null ? req.getTimestamp() : LocalDateTime.now())
                .build();
        return communicationRepository.save(c);
    }

    public List<Communication> stream(Long journeyId) {
        return communicationRepository.findByJourneyIdOrderByTimestampAsc(journeyId);
    }
}
