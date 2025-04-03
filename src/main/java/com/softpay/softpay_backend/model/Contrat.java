package com.softpay.softpay_backend.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.List;
import jakarta.persistence.Entity;

@Entity
public class Contrat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idContrat;

    @ManyToOne
    @JoinColumn(name = "entreprise_id", nullable = false)
    private Entreprise entreprise;

    @ManyToOne
    @JoinColumn(name = "client_id", nullable = false)
    private Client client;

    private Float montantTotal;

    @Enumerated(EnumType.STRING)
    private ModePaiement modePaiement;

    private LocalDate delaiPaiement;

    @Enumerated(EnumType.STRING)
    private EtatPaiement etatPaiement;

    @OneToMany(mappedBy = "contrat", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Facture> factures;

    // Constructeur par défaut (requis par Hibernate)
    public Contrat() {
    }

    // Constructeur avec paramètres
    public Contrat(Entreprise entreprise, Client client, Float montantTotal, ModePaiement modePaiement, LocalDate delaiPaiement, EtatPaiement etatPaiement) {
        this.entreprise = entreprise;
        this.client = client;
        this.montantTotal = montantTotal;
        this.modePaiement = modePaiement;
        this.delaiPaiement = delaiPaiement;
        this.etatPaiement = etatPaiement;
    }

    // Getters et Setters
    public Long getIdContrat() {
        return idContrat;
    }

    public void setIdContrat(Long idContrat) {
        this.idContrat = idContrat;
    }

    public Entreprise getEntreprise() {
        return entreprise;
    }

    public void setEntreprise(Entreprise entreprise) {
        this.entreprise = entreprise;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Float getMontantTotal() {
        return montantTotal;
    }

    public void setMontantTotal(Float montantTotal) {
        this.montantTotal = montantTotal;
    }

    public ModePaiement getModePaiement() {
        return modePaiement;
    }

    public void setModePaiement(ModePaiement modePaiement) {
        this.modePaiement = modePaiement;
    }

    public LocalDate getDelaiPaiement() {
        return delaiPaiement;
    }

    public void setDelaiPaiement(LocalDate delaiPaiement) {
        this.delaiPaiement = delaiPaiement;
    }

    public EtatPaiement getEtatPaiement() {
        return etatPaiement;
    }

    public void setEtatPaiement(EtatPaiement etatPaiement) {
        this.etatPaiement = etatPaiement;
    }

    public List<Facture> getFactures() {
        return factures;
    }

    public void setFactures(List<Facture> factures) {
        this.factures = factures;
    }

    public void verifierPaiement() {
        // Logique à implémenter plus tard
    }
}
