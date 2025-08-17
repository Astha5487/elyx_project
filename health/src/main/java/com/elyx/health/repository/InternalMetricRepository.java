package com.elyx.health.repository;

import com.elyx.health.model.InternalMetric;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InternalMetricRepository extends JpaRepository<InternalMetric, Long> {
    List<InternalMetric> findByJourneyIdOrderByDateDesc(Long journeyId);
}