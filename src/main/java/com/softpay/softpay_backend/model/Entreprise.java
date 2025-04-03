package com.softpay.softpay_backend.model;

import jakarta.persistence.*;
import jakarta.persistence.Entity;
import java.util.List;

@Entity
public class Entreprise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String adresse;

    @OneToMany(mappedBy = "entreprise")
    private List<Client> clients;
}
