package com.elyx.health.dto;

import lombok.Data;

@Data
public class MemberDTO {
    private Long id;
    private String name;
    private int age;
    private String gender;
    private String primaryCondition;  // e.g., "High BP", "Diabetes"
    private String location;          // e.g., "Singapore"
}
