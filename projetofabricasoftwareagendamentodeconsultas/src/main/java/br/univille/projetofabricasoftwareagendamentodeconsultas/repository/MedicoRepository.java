package br.univille.projetofabricasoftwareagendamentodeconsultas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Medico;

public interface MedicoRepository extends JpaRepository<Medico, Long> {
    Medico findByCrm(String crm);
}
