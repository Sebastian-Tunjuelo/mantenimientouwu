package com.mantenimiento.backend.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mantenimiento.backend.Repository.NotaRepository;
import com.mantenimiento.backend.model.Nota;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/notes")
@CrossOrigin(origins = "http://localhost:5173") //Para que se conecte desde react
public class NoteController {
    
    @Autowired NotaRepository noteRepository; //Inyección del repositorio

    // Obtener todas las notas
    @GetMapping
    public List<Nota> getAllNotes() {
        return noteRepository.findAll();
    }

    @PostMapping
    public Nota createNota(@RequestBody Nota nota) {
        return noteRepository.save(nota);
    }

    @PostMapping("/{id}")
        public Nota updateNota(@PathVariable Long id, @RequestBody Nota notaDetalles) {
           Optional<Nota> optionalNota = noteRepository.findById(id);

              if (optionalNota.isPresent()) {
                Nota nota = optionalNota.get();
                nota.setTitulo(notaDetalles.getTitulo());
                nota.setDescripcion(notaDetalles.getDescripcion());
                return noteRepository.save(nota);
            } else {
                return null;
            }
        }   

        @DeleteMapping("/{id}")
        Optional<Nota> deleteNota(@PathVariable Long id) {
            Optional<Nota> nota = noteRepository.findById(id);
           if (nota.isPresent()) {
                noteRepository.deleteById(id);
                return nota;
            } else{
              return null;
            
        }
    
    
}
}
