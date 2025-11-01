package com.akp.area.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.akp.area.Entity.User;




public interface UserRepository extends JpaRepository<User, Long>{

   Optional<User> findByUserName(String userName);

}
