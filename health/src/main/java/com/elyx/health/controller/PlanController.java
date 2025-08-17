package com.elyx.health.controller;

import com.elyx.health.dto.request.CreatePlanRequest;
import com.elyx.health.model.Plan;
import com.elyx.health.service.PlanService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/plans")
@RequiredArgsConstructor
public class PlanController {
    private final PlanService planService;

    @PostMapping
    public ResponseEntity<Plan> create(@RequestBody CreatePlanRequest req) {
        return ResponseEntity.ok(planService.create(req));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Plan> get(@PathVariable Long id) {
        return ResponseEntity.ok(planService.get(id));
    }

    @GetMapping("/journey/{journeyId}")
    public ResponseEntity<List<Plan>> listByJourney(@PathVariable Long journeyId) {
        return ResponseEntity.ok(planService.listByJourney(journeyId));
    }
}