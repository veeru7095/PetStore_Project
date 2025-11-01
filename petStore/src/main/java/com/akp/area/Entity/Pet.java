package com.akp.area.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="pet")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Pet {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="name" ,nullable=false )
	private String name;
	
	@Column(name="species",nullable=false)
	private String species;
	
	@Column(name="breed" ,nullable=false)
	private String breed;
	
	@Column(name="age",nullable=false)
	private int age;
	
	@Column(name="gender" ,nullable=false)
	private String gender;
	
	@Column(name="price" ,nullable=false)
	private String price;
	
	@Column(name="description")
	private String description;
	
	@Column(name="imageName")
	private String imageName;
	
	@Column(name="ImageType")
	private String imageType;
	
	@Lob
	@Column(name="imageData",columnDefinition = "LONGBLOB")
	private byte[] imageData;
}
