package com.elyx.health.service;

import com.elyx.health.dto.request.CreateDecisionRequest;
import com.elyx.health.exception.NotFoundException;
import com.elyx.health.model.Decision;
import com.elyx.health.model.Journey;
import com.elyx.health.repository.DecisionRepository;
import com.elyx.health.repository.JourneyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DecisionService {
    private final DecisionRepository decisionRepository;
    private final JourneyRepository journeyRepository;

    public Decision create(CreateDecisionRequest req) {
        Journey journey = journeyRepository.findById(req.getJourneyId())
                .orElseThrow(() -> new NotFoundException("Journey not found: " + req.getJourneyId()));

        Decision d = Decision.builder()
                .journey(journey)
                .decisionType(req.getDecisionType())
                .reason(req.getReason())
                .triggeredByCommunicationId(req.getTriggeredByCommunicationId())
                .timestamp(LocalDateTime.now())
                .build();
        return decisionRepository.save(d);
    }

    public List<Decision> list(Long journeyId) {
        return decisionRepository.findByJourneyIdOrderByTimestampDesc(journeyId);
    }
}