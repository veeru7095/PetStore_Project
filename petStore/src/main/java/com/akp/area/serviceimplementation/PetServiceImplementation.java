package com.akp.area.serviceimplementation;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.akp.area.Entity.Pet;
import com.akp.area.payload.PetDto;
import com.akp.area.repository.PetRepository;
import com.akp.area.service.PetService;

@Service
public class PetServiceImplementation implements PetService{
	
	@Autowired
	private PetRepository petRepo;

	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public PetDto addProduct(PetDto petDto, MultipartFile file) throws IOException {
		
		Pet pet=modelMapper.map(petDto, Pet.class);
		pet.setImageName(file.getOriginalFilename());
		pet.setImageType(file.getContentType());
		pet.setImageData(file.getBytes());
		
		Pet savedPet=petRepo.save(pet);
		
		return modelMapper.map(savedPet, PetDto.class);
	}

	@Override
	public List<PetDto> getAllProducts() {
		return petRepo.findAll().stream()
				.map(m -> modelMapper.map(m, PetDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public byte[] getImage(long id) {
		Pet pet=petRepo.findById(id).orElseThrow();
		return pet.getImageData();
	}

	@Override
	public PetDto getById(long id) {
		Pet pet=petRepo.findById(id).orElseThrow();
		return modelMapper.map(pet, PetDto.class);
	}

	@Override
	public PetDto updateProduct(PetDto petDto,long id) {
		Pet pet=petRepo.findById(id).orElseThrow();
		pet.setName(petDto.getName());
		pet.setBreed(petDto.getBreed());
		pet.setSpecies(petDto.getSpecies());
		pet.setGender(petDto.getGender());
		pet.setPrice(petDto.getPrice());
		pet.setImageData(petDto.getImageData());
		pet.setDescription(petDto.getDescription());
		
		Pet updatedPet=petRepo.save(pet);
		return modelMapper.map(updatedPet, PetDto.class);
	}

	@Override
	public String deleteProduct(long id) {
		Pet pet=petRepo.findById(id).orElseThrow();
		petRepo.delete(pet);
		return "Deleted Successfully";
	}
	
}
