package com.skinsync.entity;

import jakarta.persistence.*;

@Entity
public class Routine extends BaseEntity {

    private String skinType;
    private String morningRoutine;
    private String nightRoutine;

    public String getSkinType() {
        return skinType;
    }

    public void setSkinType(String skinType) {
        this.skinType = skinType;
    }

    public String getMorningRoutine() {
        return morningRoutine;
    }

    public void setMorningRoutine(String morningRoutine) {
        this.morningRoutine = morningRoutine;
    }

    public String getNightRoutine() {
        return nightRoutine;
    }

    public void setNightRoutine(String nightRoutine) {
        this.nightRoutine = nightRoutine;
    }
}