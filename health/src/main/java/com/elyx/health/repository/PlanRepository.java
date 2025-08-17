package com.elyx.health.repository;

import com.elyx.health.model.Plan;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlanRepository extends JpaRepository<Plan, Long> {
    List<Plan> findByJourneyId(Long journeyId);
}
