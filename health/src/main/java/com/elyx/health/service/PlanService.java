package com.elyx.health.service;

import com.elyx.health.dto.request.CreatePlanRequest;
import com.elyx.health.exception.NotFoundException;
import com.elyx.health.model.Journey;
import com.elyx.health.model.Plan;
import com.elyx.health.repository.JourneyRepository;
import com.elyx.health.repository.PlanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PlanService {
    private final PlanRepository planRepository;
    private final JourneyRepository journeyRepository;

    public Plan create(CreatePlanRequest req) {
        Journey journey = journeyRepository.findById(req.getJourneyId())
                .orElseThrow(() -> new NotFoundException("Journey not found: " + req.getJourneyId()));

        Plan p = Plan.builder()
                .journey(journey)
                .effectiveFrom(req.getEffectiveFrom())
                .effectiveTo(req.getEffectiveTo())
                .adherencePercent(req.getAdherencePercent())
                .exerciseMinutesPerWeek(req.getExerciseMinutesPerWeek())
                .nutritionNotes(req.getNutritionNotes())
                .build();
        return planRepository.save(p);
    }

    public List<Plan> listByJourney(Long journeyId) {
        return planRepository.findByJourneyId(journeyId);
    }

    public Plan get(Long id) {
        return planRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Plan not found: " + id));
    }
}