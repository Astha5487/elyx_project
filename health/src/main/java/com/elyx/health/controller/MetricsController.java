package com.elyx.health.controller;

import com.elyx.health.model.InternalMetric;
import com.elyx.health.service.MetricsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/metrics")
@RequiredArgsConstructor
public class MetricsController {
    private final MetricsService metricsService;

    @PostMapping("/journey/{journeyId}")
    public ResponseEntity<InternalMetric> log(@PathVariable Long journeyId,
                                              @RequestBody Map<String, Integer> body,
                                              @RequestParam(required = false) String date) {
        Integer doctor = body.getOrDefault("doctorMinutes", 0);
        Integer coach = body.getOrDefault("coachMinutes", 0);
        Integer review = body.getOrDefault("dataReviewMinutes", 0);
        LocalDate d = (date != null) ? LocalDate.parse(date) : null;
        return ResponseEntity.ok(metricsService.log(journeyId, doctor, coach, review, d));
    }

    @GetMapping("/journey/{journeyId}")
    public ResponseEntity<List<InternalMetric>> list(@PathVariable Long journeyId) {
        return ResponseEntity.ok(metricsService.list(journeyId));
    }
}
