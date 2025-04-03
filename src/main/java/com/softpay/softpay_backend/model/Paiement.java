package com.softpay.softpay_backend.model;

import jakarta.persistence.*;
import java.util.Date;
import jakarta.persistence.Entity;


@Entity
public class Paiement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPaiement;

    @ManyToOne
    private Contrat contrat;

    @ManyToOne
    private Facture facture;

    private Float montantPaiement;
    private Date datePaiement;

    @Enumerated(EnumType.STRING)
    private ModePaiement modePaiement;

    public void enregistrerPaiement() {

    }

}
