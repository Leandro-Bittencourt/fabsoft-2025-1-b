package br.univille.projetofabricasoftwareagendamentodeconsultas.service.impl;

import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Medico;
import br.univille.projetofabricasoftwareagendamentodeconsultas.repository.MedicoRepository;
import br.univille.projetofabricasoftwareagendamentodeconsultas.service.MedicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MedicoServiceImpl implements MedicoService {

    @Autowired
    private MedicoRepository medicoRepository;

    @Override
    public List<Medico> getAll() {
        return medicoRepository.findAll();
    }

    @Override
    public Medico getById(Long id) {
        Optional<Medico> result = medicoRepository.findById(id);
        return result.orElse(null);
    }

    @Override
    public Medico save(Medico medico) {
        return medicoRepository.save(medico);
    }

    @Override
    public void delete(Long id) {
        medicoRepository.deleteById(id);
    }
}
