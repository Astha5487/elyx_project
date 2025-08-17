package com.elyx.health.controller;

import com.elyx.health.dto.request.CreateMemberRequest;
import com.elyx.health.model.Member;
import com.elyx.health.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/members")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;

    @PostMapping
    public ResponseEntity<Member> create(@RequestBody CreateMemberRequest req) {
        return ResponseEntity.ok(memberService.create(req));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Member> get(@PathVariable Long id) {
        return ResponseEntity.ok(memberService.get(id));
    }

    @GetMapping
    public ResponseEntity<List<Member>> list() {
        return ResponseEntity.ok(memberService.list());
    }
}
