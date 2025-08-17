package com.elyx.health.controller;

import com.elyx.health.dto.request.CreateDiagnosticRequest;
import com.elyx.health.model.DiagnosticTest;
import com.elyx.health.service.DiagnosticService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/diagnostics")
@RequiredArgsConstructor
public class DiagnosticController {
    private final DiagnosticService diagnosticService;

    @PostMapping
    public ResponseEntity<DiagnosticTest> create(@RequestBody CreateDiagnosticRequest req) {
        return ResponseEntity.ok(diagnosticService.create(req));
    }

    @GetMapping("/journey/{journeyId}")
    public ResponseEntity<List<DiagnosticTest>> list(@PathVariable Long journeyId) {
        return ResponseEntity.ok(diagnosticService.list(journeyId));
    }
}