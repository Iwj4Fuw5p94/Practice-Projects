package com.hexaware.customer.springbatch.sservice;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.customer.springbatch.entity.Player;
import com.hexaware.customer.springbatch.repository.PlayerRepository;


@Service
public class PlayerServiceImpl implements IPlayerService {
	
	Logger logger=LoggerFactory.getLogger(PlayerServiceImpl.class);
	@Autowired
	PlayerRepository playerrepository;

	@Override
	public Player createPlayer(Player player) {
		Player player2=playerrepository.save(player);
		if(player2 !=null) {
			logger.info("not null");
			return player2;
			
		}
		return null;
	}


	@Override
	public Player getPlayerById(long playerId) {
		return playerrepository.findById(playerId).orElse(null);
	}

	@Override
	public List<Player> getAllPlayers() {
		// TODO Auto-generated method stub
		return playerrepository.findAll();
	}

	@Override
	public String deletePlayerById(long playerId) {
		playerrepository.deleteById(playerId);
		return "records deleted";
	}

}
