package com.softpay.softpay_backend.service;

import com.softpay.softpay_backend.model.Client;
import java.util.Optional;

public interface ClientService {
    Client createClient(Client client);
    Optional<Client> getClientById(Long id);
}
