package br.univille.projetofabricasoftwareagendamentodeconsultas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Consulta;
import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Medico;
import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Paciente;

public interface ConsultaRepository extends JpaRepository<Consulta, Long> {
    
    List<Consulta> findByMedico(Medico medico);
    
    List<Consulta> findByPaciente(Paciente paciente);

    List<Consulta> findByStatus(String status);
}