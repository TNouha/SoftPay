package com.softpay.softpay_backend.repository;

import com.softpay.softpay_backend.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
