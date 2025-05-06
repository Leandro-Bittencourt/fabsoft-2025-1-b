package br.univille.projetofabricasoftwareagendamentodeconsultas.service;

import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Medico;

import java.util.List;

public interface MedicoService {
    List<Medico> getAll();
    Medico getById(Long id);
    Medico save(Medico medico);
    void delete(Long id);
}
