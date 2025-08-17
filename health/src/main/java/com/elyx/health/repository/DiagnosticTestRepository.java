package com.elyx.health.repository;

import com.elyx.health.model.DiagnosticTest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DiagnosticTestRepository extends JpaRepository<DiagnosticTest, Long> {
    List<DiagnosticTest> findByJourneyIdOrderByTestDateDesc(Long journeyId);
}