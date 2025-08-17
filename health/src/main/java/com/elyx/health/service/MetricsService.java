package com.elyx.health.service;

import com.elyx.health.exception.NotFoundException;
import com.elyx.health.model.InternalMetric;
import com.elyx.health.model.Journey;
import com.elyx.health.repository.InternalMetricRepository;
import com.elyx.health.repository.JourneyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MetricsService {
    private final InternalMetricRepository internalMetricRepository;
    private final JourneyRepository journeyRepository;

    public InternalMetric log(Long journeyId, Integer doctorMin, Integer coachMin, Integer reviewMin, LocalDate date) {
        Journey j = journeyRepository.findById(journeyId)
                .orElseThrow(() -> new NotFoundException("Journey not found: " + journeyId));

        InternalMetric m = InternalMetric.builder()
                .journey(j)
                .date(date != null ? date : LocalDate.now())
                .doctorMinutes(doctorMin != null ? doctorMin : 0)
                .coachMinutes(coachMin != null ? coachMin : 0)
                .dataReviewMinutes(reviewMin != null ? reviewMin : 0)
                .build();
        return internalMetricRepository.save(m);
    }

    public List<InternalMetric> list(Long journeyId) {
        return internalMetricRepository.findByJourneyIdOrderByDateDesc(journeyId);
    }
}
