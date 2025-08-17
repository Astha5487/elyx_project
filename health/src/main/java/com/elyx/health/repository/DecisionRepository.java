package com.elyx.health.repository;

import com.elyx.health.model.Decision;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DecisionRepository extends JpaRepository<Decision, Long> {
    List<Decision> findByJourneyIdOrderByTimestampDesc(Long journeyId);
}