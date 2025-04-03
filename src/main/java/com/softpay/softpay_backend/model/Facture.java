package com.softpay.softpay_backend.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.List;
import jakarta.persistence.Entity;


@Entity
public class Facture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idFacture;

    @ManyToOne
    private Contrat contrat;

    private Float montant;
    private LocalDate dateEmission;
    private LocalDate dateEcheance;

    @Enumerated(EnumType.STRING)
    private StatutFacture statut;

    @OneToMany(mappedBy = "facture", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Paiement> paiements;

    // Constructeur par défaut (requis par Hibernate)
    public Facture() {
    }

    // Constructeur avec paramètres
    public Facture(Contrat contrat, Float montant, LocalDate dateEmission, LocalDate dateEcheance, StatutFacture statut) {
        this.contrat = contrat;
        this.montant = montant;
        this.dateEmission = dateEmission;
        this.dateEcheance = dateEcheance;
        this.statut = statut;
    }

    // Getters et Setters
    public Long getIdFacture() {
        return idFacture;
    }

    public void setIdFacture(Long idFacture) {
        this.idFacture = idFacture;
    }

    public Contrat getContrat() {
        return contrat;
    }

    public void setContrat(Contrat contrat) {
        this.contrat = contrat;
    }

    public Float getMontant() {
        return montant;
    }

    public void setMontant(Float montant) {
        this.montant = montant;
    }

    public LocalDate getDateEmission() {
        return dateEmission;
    }

    public void setDateEmission(LocalDate dateEmission) {
        this.dateEmission = dateEmission;
    }

    public LocalDate getDateEcheance() {
        return dateEcheance;
    }

    public void setDateEcheance(LocalDate dateEcheance) {
        this.dateEcheance = dateEcheance;
    }

    public StatutFacture getStatut() {
        return statut;
    }

    public void setStatut(StatutFacture statut) {
        this.statut = statut;
    }

    public List<Paiement> getPaiements() {
        return paiements;
    }

    public void setPaiements(List<Paiement> paiements) {
        this.paiements = paiements;
    }
}
