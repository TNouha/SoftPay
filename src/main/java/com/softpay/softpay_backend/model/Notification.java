package com.softpay.softpay_backend.model;

import jakarta.persistence.*;
import java.util.Date;
import jakarta.persistence.Entity;


@Entity
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idNotification;

    @ManyToOne
    private Utilisateur utilisateur;

    private String message;
    private Date dateEnvoi;
}
