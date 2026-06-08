package com.skinsync.strategy;

import java.util.Arrays;
import java.util.List;

public class SensitiveSkinStrategy implements RecommendationStrategy {

    @Override
    public List<String> getRecommendations() {

        return Arrays.asList(
                "Cetaphil Gentle Skin Cleanser",
                "SKIN1004 Centella Ampoule",
                "Physiogel Daily Moisture Therapy",
                "Skin Aqua Sensitive Sunscreen"
        );
    }
}