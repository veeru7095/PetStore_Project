package com.akp.area.service;

import java.io.IOException;
import java.util.*;

import org.springframework.web.multipart.MultipartFile;

import com.akp.area.payload.PetDto;

public interface PetService {
	
	public PetDto addProduct(PetDto pet,MultipartFile file) throws IOException;
	
	public List<PetDto> getAllProducts();
	
	public byte[] getImage(long id);
	
	public PetDto getById(long id);
	
	public PetDto updateProduct(PetDto petDto,long id);
	
	public String deleteProduct(long id);
	
}
