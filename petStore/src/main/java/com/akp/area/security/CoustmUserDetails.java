package com.akp.area.security;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.akp.area.Entity.User;
import com.akp.area.repository.UserRepository;

@Service
public class CoustmUserDetails implements UserDetailsService{
	
	@Autowired
	private UserRepository userRepo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user=userRepo.findByUserName(username).orElseThrow(
				()-> new UsernameNotFoundException(String.format("User not found with username: %s", username)));

		Set<GrantedAuthority> authorities=new HashSet<>();
		authorities.add(new SimpleGrantedAuthority("ROLE_"+user.getRole().toUpperCase()));
		return new org.springframework.security.core.userdetails.User(
				user.getUserName(),user.getPassword(),authorities);
	}

}
