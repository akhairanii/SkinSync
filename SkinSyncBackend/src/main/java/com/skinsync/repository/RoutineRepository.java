package com.skinsync.repository;

import com.skinsync.entity.Routine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoutineRepository
        extends JpaRepository<Routine, Long> {

    Routine findBySkinType(String SkinType);

}