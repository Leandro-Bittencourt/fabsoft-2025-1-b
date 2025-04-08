package br.univille.projetofabricasoftwareagendamentodeconsultas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Pagamento;
import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Consulta;

public interface PagamentoRepository extends JpaRepository<Pagamento, Long> {

    Pagamento findByConsulta(Consulta consulta);
}

