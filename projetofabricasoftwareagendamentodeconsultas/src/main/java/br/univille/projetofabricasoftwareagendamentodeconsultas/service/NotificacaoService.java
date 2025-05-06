package br.univille.projetofabricasoftwareagendamentodeconsultas.service;

import org.springframework.stereotype.Service;
import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Consulta;

import java.time.format.DateTimeFormatter;

@Service
public class NotificacaoService {
    public void agendarNotificacao(Consulta consulta) {
        String data = consulta.getDataHora().minusDays(1)
                        .format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm"));
        System.out.println("Enviar WhatsApp ao paciente " + consulta.getPaciente().getNome() +
                " um dia antes da consulta: " + data);
    }
}
