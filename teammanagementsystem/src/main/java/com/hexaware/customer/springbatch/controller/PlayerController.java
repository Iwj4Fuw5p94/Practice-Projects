package com.hexaware.customer.springbatch.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.customer.springbatch.entity.Player;
import com.hexaware.customer.springbatch.sservice.IPlayerService;


@RestController
@RequestMapping("/api/players")
public class PlayerController {
	
	@Autowired
	IPlayerService iPlayerService;
	
	
	@PostMapping("/add")
	public Player addPlayer(@RequestBody Player player) {
		
		return iPlayerService.createPlayer(player);
	}
	
	@GetMapping("/getPlayerById/{playerId}")
	public Player getPlayerById(@PathVariable Long playerId) {
		
		return iPlayerService.getPlayerById(playerId);
	}
	
	@DeleteMapping("/delete/{playerId}")
	public boolean deletePlayer(@PathVariable long playerId) {
		iPlayerService.deletePlayerById(playerId);
		return true;
	}
	
	@GetMapping("/getAll")
	public List<Player> getAllPlayers(){
		
		return iPlayerService.getAllPlayers();
	}
	

}
