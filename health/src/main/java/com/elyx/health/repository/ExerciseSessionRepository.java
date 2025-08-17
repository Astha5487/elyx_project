package com.elyx.health.repository;

import com.elyx.health.model.ExerciseSession;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExerciseSessionRepository extends JpaRepository<ExerciseSession, Long> {
    List<ExerciseSession> findByPlanId(Long planId);
}