package com.skinsync.service;

import com.skinsync.entity.Routine;
import com.skinsync.repository.RoutineRepository;
import org.springframework.stereotype.Service;

@Service
public class RoutineService {

    private final RoutineRepository routineRepository;

    public RoutineService(RoutineRepository routineRepository) {
        this.routineRepository = routineRepository;
    }

    public Routine saveRoutine(Routine routine) {
        return routineRepository.save(routine);
    }

    public Routine getRoutineBySkinType(String skinType) {
        return routineRepository.findBySkinType(skinType);
    }
}