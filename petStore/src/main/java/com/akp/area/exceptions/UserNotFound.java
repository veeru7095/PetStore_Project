package com.akp.area.exceptions;

public class UserNotFound extends RuntimeException{
	
	private String message;
	
	public UserNotFound(String message) {
		super(message);
	}

}
