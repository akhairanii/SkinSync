package com.skinsync.controller;

import com.skinsync.entity.Routine;
import com.skinsync.service.RoutineService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/routines")
@CrossOrigin("*")
public class RoutineController {

    private final RoutineService routineService;

    public RoutineController(RoutineService routineService) {
        this.routineService = routineService;
    }

    @PostMapping
    public Routine saveRoutine(
            @RequestBody Routine routine) {

        return routineService.saveRoutine(routine);
    }

    @GetMapping("/{skinType}")
    public Routine getRoutineBySkinType(
            @PathVariable String skinType) {

        return routineService.getRoutineBySkinType(skinType);
    }
}