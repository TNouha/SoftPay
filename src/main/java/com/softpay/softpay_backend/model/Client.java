package com.softpay.softpay_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

import java.lang.annotation.Annotation;

@Entity
@Table(name = "clients")
public class Client implements Entity {

    private String name;
    private String email;
    private String paymentStatus;

    public Client() {}

    public Client(String name, String email, String paymentStatus) {
        this.name = name;
        this.email = email;
        this.paymentStatus = paymentStatus;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    @Override
    public String name() {
        return "";
    }

    @Override
    public Class<? extends Annotation> annotationType() {
        return null;
    }
}
