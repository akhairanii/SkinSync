package com.skinsync.strategy;

import java.util.Arrays;
import java.util.List;

public class DrySkinStrategy implements RecommendationStrategy {

    @Override
    public List<String> getRecommendations() {

        return Arrays.asList(
                "Hada Labo Gokujyun Face Wash",
                "Skintific 5X Ceramide Serum",
                "CeraVe Moisturizing Cream",
                "Skin Aqua UV Moisture Milk"
        );
    }
}