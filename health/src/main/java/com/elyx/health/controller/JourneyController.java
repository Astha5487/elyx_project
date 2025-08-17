package com.elyx.health.controller;

import com.elyx.health.dto.request.CreateJourneyRequest;
import com.elyx.health.model.Journey;
import com.elyx.health.service.JourneyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/journeys")
@RequiredArgsConstructor
public class JourneyController {
    private final JourneyService journeyService;

    @PostMapping
    public ResponseEntity<Journey> create(@RequestBody CreateJourneyRequest req) {
        return ResponseEntity.ok(journeyService.create(req));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Journey> get(@PathVariable Long id) {
        return ResponseEntity.ok(journeyService.get(id));
    }

    @GetMapping("/member/{memberId}")
    public ResponseEntity<List<Journey>> listByMember(@PathVariable Long memberId) {
        return ResponseEntity.ok(journeyService.listByMember(memberId));
    }
}
