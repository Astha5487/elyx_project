package com.elyx.health.controller;
import com.elyx.health.dto.request.CreateMessageRequest;
import com.elyx.health.model.Communication;
import com.elyx.health.service.CommunicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/communications")
@RequiredArgsConstructor
public class CommunicationController {
    private final CommunicationService communicationService;

    @PostMapping
    public ResponseEntity<Communication> create(@RequestBody CreateMessageRequest req) {
        return ResponseEntity.ok(communicationService.create(req));
    }

    @GetMapping("/journey/{journeyId}")
    public ResponseEntity<List<Communication>> stream(@PathVariable Long journeyId) {
        return ResponseEntity.ok(communicationService.stream(journeyId));
    }
}