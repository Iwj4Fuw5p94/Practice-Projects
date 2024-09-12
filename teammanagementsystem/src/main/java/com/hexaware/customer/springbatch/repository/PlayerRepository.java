package com.hexaware.customer.springbatch.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hexaware.customer.springbatch.entity.Player;
@Repository
public interface PlayerRepository extends JpaRepository<Player,Long>{

}
