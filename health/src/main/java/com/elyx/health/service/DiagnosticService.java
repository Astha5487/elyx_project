package com.elyx.health.service;

import com.elyx.health.dto.request.CreateDiagnosticRequest;
import com.elyx.health.exception.NotFoundException;
import com.elyx.health.model.DiagnosticTest;
import com.elyx.health.model.Journey;
import com.elyx.health.repository.DiagnosticTestRepository;
import com.elyx.health.repository.JourneyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DiagnosticService {
    private final DiagnosticTestRepository diagnosticTestRepository;
    private final JourneyRepository journeyRepository;

    public DiagnosticTest create(CreateDiagnosticRequest req) {
        Journey journey = journeyRepository.findById(req.getJourneyId())
                .orElseThrow(() -> new NotFoundException("Journey not found: " + req.getJourneyId()));

        DiagnosticTest dt = DiagnosticTest.builder()
                .journey(journey)
                .testDate(req.getTestDate())
                .panelName(req.getPanelName())
                .highlights(req.getHighlights())
                .build();
        return diagnosticTestRepository.save(dt);
    }

    public List<DiagnosticTest> list(Long journeyId) {
        return diagnosticTestRepository.findByJourneyIdOrderByTestDateDesc(journeyId);
    }
}