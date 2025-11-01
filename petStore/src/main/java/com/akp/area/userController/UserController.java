package com.akp.area.userController;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.akp.area.Entity.User;
import com.akp.area.exceptions.UserNotFound;
import com.akp.area.payload.LoginDto;
import com.akp.area.payload.UserDto;
import com.akp.area.repository.UserRepository;
import com.akp.area.service.UserService;

@RestController
@RequestMapping("api/auth")
@CrossOrigin("*")
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@PostMapping("/register")
	public ResponseEntity<UserDto> register(@RequestBody UserDto userDto){
		return new ResponseEntity<>(userService.register(userDto),HttpStatus.CREATED);
	}
	
	@PostMapping("/login")
	public ResponseEntity<Map<String, Object>> login(@RequestBody LoginDto loginDto){
		try {
			Authentication authentication=authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(loginDto.getUserName(), loginDto.getPassword()));
			User user=userRepo.findByUserName(loginDto.getUserName()).orElseThrow();
			
			SecurityContextHolder.getContext().setAuthentication(authentication);
			
			Map<String ,Object> response=new LinkedHashMap<String, Object>();
			response.put("userName", user.getUserName());
			response.put("role", user.getRole());
			
			return ResponseEntity.ok(response);
		}
		catch(Exception e) {
			throw new UserNotFound("username or passsword wrong please check");
		}		
	}
}
