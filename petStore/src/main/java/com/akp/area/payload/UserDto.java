package com.akp.area.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {

	private long id;
	private String userName;
	private String email;
	private String password;
	private String role;
}
