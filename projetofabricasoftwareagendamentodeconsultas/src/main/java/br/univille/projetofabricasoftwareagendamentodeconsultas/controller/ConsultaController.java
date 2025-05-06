package br.univille.projetofabricasoftwareagendamentodeconsultas.controller;

import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Consulta;
import br.univille.projetofabricasoftwareagendamentodeconsultas.service.ConsultaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/consulta")
public class ConsultaController {

    @Autowired
    private ConsultaService consultaService;

    @PostMapping
    public Consulta agendar(@RequestBody Consulta consulta) {
        return consultaService.agendarConsulta(consulta);
    }

    @GetMapping("/medico/{id}")
    public List<Consulta> listarPorMedico(@PathVariable Long id) {
        return consultaService.listarPorMedico(id);
    }

    @GetMapping("/paciente/{id}")
    public List<Consulta> listarPorPaciente(@PathVariable Long id) {
        return consultaService.listarPorPaciente(id);
    }
}
