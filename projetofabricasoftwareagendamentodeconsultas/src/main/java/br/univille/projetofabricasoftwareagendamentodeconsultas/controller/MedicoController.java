package br.univille.projetofabricasoftwareagendamentodeconsultas.controller;

import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Medico;
import br.univille.projetofabricasoftwareagendamentodeconsultas.service.MedicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medico")
public class MedicoController {

    @Autowired
    private MedicoService medicoService;

    @GetMapping
    public List<Medico> listarTodos() {
        return medicoService.getAll();
    }

    @GetMapping("/{id}")
    public Medico buscarPorId(@PathVariable Long id) {
        return medicoService.getById(id);
    }

    @PostMapping
    public Medico criar(@RequestBody Medico medico) {
        return medicoService.save(medico);
    }

    @PutMapping("/{id}")
    public Medico atualizar(@PathVariable Long id, @RequestBody Medico medico) {
        medico.setId(id);
        return medicoService.save(medico);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        medicoService.delete(id);
    }
}
