package com.elyx.health.service;

import com.elyx.health.dto.request.CreateMemberRequest;
import com.elyx.health.exception.NotFoundException;
import com.elyx.health.model.Member;
import com.elyx.health.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    public Member create(CreateMemberRequest req) {
        Member m = Member.builder()
                .fullName(req.getFullName())
                .email(req.getEmail())
                .residence(req.getResidence())
                .chronicCondition(req.getChronicCondition())
                .weeklyCommitmentHours(req.getWeeklyCommitmentHours() == null ? 5 : req.getWeeklyCommitmentHours())
                .build();
        return memberRepository.save(m);
    }

    public Member get(Long id) {
        return memberRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Member not found: " + id));
    }

    public List<Member> list() {
        return memberRepository.findAll();
    }
}
