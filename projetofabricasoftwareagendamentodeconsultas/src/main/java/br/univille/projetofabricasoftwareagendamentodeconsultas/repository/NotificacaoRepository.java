package br.univille.projetofabricasoftwareagendamentodeconsultas.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Notificacao;
import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Paciente;

public interface NotificacaoRepository extends JpaRepository<Notificacao, Long> {
    
    List<Notificacao> findByDestinatario(Paciente destinatario);
}

