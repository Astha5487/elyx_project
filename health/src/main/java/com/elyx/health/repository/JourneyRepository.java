package com.elyx.health.repository;

import com.elyx.health.model.Journey;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JourneyRepository extends JpaRepository<Journey, Long> {
    List<Journey> findByMemberId(Long memberId);
}
