package com.softpay.softpay_backend.controller;

import com.softpay.softpay_backend.model.Client;
import com.softpay.softpay_backend.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/clients")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @PostMapping
    public Client createClient(@RequestBody Client client) {
        return clientService.createClient(client);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Client> getClientById(@PathVariable Long id) {
        Optional<Client> client = clientService.getClientById(id);

        // Vérifie si le client existe
        if (client.isPresent()) {
            return new ResponseEntity<>(client.get(), HttpStatus.OK);  // Retourne le client avec un statut OK
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);  // Si le client n'est pas trouvé, retourne un statut NOT_FOUND
        }
    }
}
