package com.softpay.softpay_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication
public class SoftpayBackendApplication {

	private static final Logger logger = LoggerFactory.getLogger(SoftpayBackendApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(SoftpayBackendApplication.class, args);
		logger.info("🚀 SoftPay Backend Application a démarré avec succès !");
	}

}
