package com.elyx.health.controller;

import com.elyx.health.dto.request.CreateDecisionRequest;
import com.elyx.health.model.Decision;
import com.elyx.health.service.DecisionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/decisions")
@RequiredArgsConstructor
public class DecisionController {
    private final DecisionService decisionService;

    @PostMapping
    public ResponseEntity<Decision> create(@RequestBody CreateDecisionRequest req) {
        return ResponseEntity.ok(decisionService.create(req));
    }

    @GetMapping("/journey/{journeyId}")
    public ResponseEntity<List<Decision>> list(@PathVariable Long journeyId) {
        return ResponseEntity.ok(decisionService.list(journeyId));
    }
}
