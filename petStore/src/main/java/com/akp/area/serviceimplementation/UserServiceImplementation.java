package com.akp.area.serviceimplementation;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.akp.area.Entity.User;
import com.akp.area.payload.UserDto;
import com.akp.area.repository.UserRepository;
import com.akp.area.service.UserService;

@Service
public class UserServiceImplementation implements UserService{

	@Autowired
	private ModelMapper modelmapper;
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public UserDto register(UserDto userDto) {
		User user=modelmapper.map(userDto, User.class);
		user.setPassword(passwordEncoder.encode(user.getPassword())); 
		User savedUser=userRepo.save(user);
		return modelmapper.map(savedUser, UserDto.class);
	}

}
