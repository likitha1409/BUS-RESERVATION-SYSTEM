package com.busreservation.dto;

import lombok.Data;

@Data
public class UserLoginRequest {

	private String emailId;

	private String password;

	private String role;

}