package com.cts.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;



@RestControllerAdvice
public class GlobalException {
	
	 @ExceptionHandler({ EventNotFoundException.class })
	    public ResponseEntity<Object> handleBookNotFoundException(EventNotFoundException ex) {
	        String message = ex.getMessage();
	        ApiResponse apiResponse = new ApiResponse(message, false);
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(message);
	    }
}
class ApiResponse {
 private String message;
 private boolean success;

 public ApiResponse(String message, boolean success) {
     this.message = message;
     this.success = success;
 }

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}
}
