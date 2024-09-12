package com.hexaware.customer.springbatch.sservice;

import java.util.List;

import com.hexaware.customer.springbatch.entity.Player;

public interface IPlayerService {

	public Player createPlayer(Player player);

//	public Player updatePlayer(long playerId, Player player);

	public Player getPlayerById(long playerId);

	public List<Player> getAllPlayers();

	public String deletePlayerById(long playerId);

}
