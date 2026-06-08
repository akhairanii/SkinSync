package com.skinsync.strategy;

import java.util.Arrays;
import java.util.List;

public class OilySkinStrategy implements RecommendationStrategy {

    @Override
    public List<String> getRecommendations() {

        return Arrays.asList(
                "Skintific 5X Ceramide Gel Cleanser",
                "Somethinc Niacinamide Serum",
                "Azarine Oil Free Moisturizer",
                "Skin Aqua UV Moisture Gel"
        );
    }
}