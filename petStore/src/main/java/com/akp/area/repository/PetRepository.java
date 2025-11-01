package com.akp.area.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.akp.area.Entity.Pet;

public interface PetRepository extends JpaRepository<Pet, Long> {
	

}
