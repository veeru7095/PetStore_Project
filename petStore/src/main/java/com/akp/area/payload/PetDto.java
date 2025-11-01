package com.akp.area.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PetDto {
	
	private long id;
	private String name;
	private String species;
	private String breed;
	private int age;
	private String gender;
	private String price;
	private String description;

	private byte[] imageData;
	 

}
