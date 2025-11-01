package com.akp.area.userController;

import java.io.IOException;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


import com.akp.area.payload.PetDto;
import com.akp.area.repository.PetRepository;
import com.akp.area.service.PetService;

import java.util.*;

@RestController
@RequestMapping("/api/product")
@CrossOrigin("*")
public class PetController {
	
	@Autowired
	private PetService petService;
		
	@PostMapping("/addProduct")
	public ResponseEntity<PetDto> addProduct(@RequestPart PetDto petDto,
			@RequestPart MultipartFile file) throws IOException {
		return new ResponseEntity<PetDto>(petService.addProduct(petDto, file),HttpStatus.CREATED);
	}

	@GetMapping("/allProducts")
	public List<PetDto> allProducts(){
		return petService.getAllProducts();
	}
	
	@GetMapping("/getImage/{id}")
	public ResponseEntity<byte[]> getImage(@PathVariable long id){
		return new  ResponseEntity<byte[]>(petService.getImage(id),HttpStatus.OK);
	}
	
	
	@PutMapping("/updateProduct/{id}")
	public ResponseEntity<PetDto> updateProduct(
			@RequestPart PetDto petDto,
			@RequestPart MultipartFile file
			,@PathVariable long id) throws IOException{
		if (file != null && !file.isEmpty()) {
	        petDto.setImageData(file.getBytes());
	    }
		return new  ResponseEntity<PetDto>(petService.updateProduct(petDto, id),HttpStatus.CREATED);
	}
	
	@DeleteMapping("deleteProduct/{id}")
	public ResponseEntity<String> DeleteProduct(@PathVariable long id){
		petService.deleteProduct(id);
		return new ResponseEntity<String>("Deleted SuccessFully",HttpStatus.OK);
	}
	
}
