package com.skinsync.controller;

import com.skinsync.entity.Product;
import com.skinsync.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin("*")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public Product saveProduct(
            @RequestBody Product product) {

        return productService.save(product);
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/skin/{targetSkinType}")
    public List<Product> getProductsByTargetSkinType(
            @PathVariable String targetSkinType) {

        return productService.getProductsBySkinType(targetSkinType);
    }
}