package com.elyx.health.repository;

import com.elyx.health.model.Communication;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommunicationRepository extends JpaRepository<Communication, Long> {
    List<Communication> findByJourneyIdOrderByTimestampAsc(Long journeyId);
}
