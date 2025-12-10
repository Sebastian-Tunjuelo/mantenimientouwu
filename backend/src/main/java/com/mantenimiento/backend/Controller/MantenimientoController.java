package com.mantenimiento.backend.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mantenimiento.backend.Repository.MantenimientoRepository;
import com.mantenimiento.backend.model.Mantenimiento;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/api/mantenimientos")
@CrossOrigin(origins = "http://localhost:5173") //Para que se conecte desde react
public class MantenimientoController {

    @Autowired MantenimientoRepository mantenimientoRepository; //Inyección del repositorio

    @GetMapping
    public List <Mantenimiento> listaMantenimientos(){
        return mantenimientoRepository.findAll();
    }

    @PostMapping
    public Mantenimiento crearMantenimiento(@RequestBody Mantenimiento mantenimiento) {
        return mantenimientoRepository.save(mantenimiento);
    }

    @PostMapping("/{id}")
    public Mantenimiento editarMantenimiento(@PathVariable Long id, 
        @RequestBody Mantenimiento mantenimientoDetalles) {

         Optional<Mantenimiento> optionalMantenimiento = mantenimientoRepository.findById(id);
    
          if (optionalMantenimiento.isPresent()) {
                Mantenimiento mantenimiento = optionalMantenimiento.get();
                mantenimiento.setFechaMantenimiento(mantenimientoDetalles.getFechaMantenimiento());
                mantenimiento.setTipoMantenimiento(mantenimientoDetalles.getTipoMantenimiento());
                mantenimiento.setObservaciones(mantenimientoDetalles.getObservaciones());
                return mantenimientoRepository.save(mantenimiento);
          } else {
                return null;
          }
    }
    
    @DeleteMapping("/{id}")
    public void eliminarMantenimiento(@PathVariable Long id) {
          mantenimientoRepository.deleteById(id);
    }

    
    
}
