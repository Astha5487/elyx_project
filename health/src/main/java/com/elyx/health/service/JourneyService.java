package com.elyx.health.service;

import com.elyx.health.dto.request.CreateJourneyRequest;
import com.elyx.health.exception.NotFoundException;
import com.elyx.health.model.Journey;
import com.elyx.health.model.Member;
import com.elyx.health.repository.JourneyRepository;
import com.elyx.health.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class JourneyService {
    private final JourneyRepository journeyRepository;
    private final MemberRepository memberRepository;

    public Journey create(CreateJourneyRequest req) {
        Member member = memberRepository.findById(req.getMemberId())
                .orElseThrow(() -> new NotFoundException("Member not found: " + req.getMemberId()));

        Journey j = Journey.builder()
                .member(member)
                .startDate(req.getStartDate())
                .endDate(req.getEndDate())
                .build();
        return journeyRepository.save(j);
    }

    public Journey get(Long id) {
        return journeyRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Journey not found: " + id));
    }

    public List<Journey> listByMember(Long memberId) {
        return journeyRepository.findByMemberId(memberId);
    }
}