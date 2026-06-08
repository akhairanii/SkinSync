package com.skinsync.controller;

import com.skinsync.entity.Review;
import com.skinsync.service.ReviewService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
@CrossOrigin("*")
public class ReviewController {

    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping
    public Review saveReview(
            @RequestBody Review review) {

        return reviewService.saveReview(review);
    }

    @GetMapping
    public List<Review> getAllReviews() {
        return reviewService.getAllReviews();
    }

    @GetMapping("/{productName}")
    public List<Review> getReviewsByProduct(
            @PathVariable String productName) {

        return reviewService.getReviewsByProduct(productName);
    }
}