package com.mantenimiento.backend.Controller;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mantenimiento.backend.Repository.ProductoUsuarioRepository;
import com.mantenimiento.backend.model.ProductoUsuario;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/api/producto-usuario")
@CrossOrigin(origins = "http://localhost:5173") //Para que se conecte desde react
public class ProductoUsuarioController {
    
    @Autowired ProductoUsuarioRepository productoUsuarioRepository; //Inyección del repositorio
    
    @GetMapping
    public List<ProductoUsuario> listaProductoUsuarios() {
        return productoUsuarioRepository.findAll();
    } 

    @PostMapping()
    public ProductoUsuario crearProductoUsuario(@RequestBody ProductoUsuario productoUsuario) {
        return productoUsuarioRepository.save(productoUsuario);
    
    }

    @PostMapping("/{id}")
    
    public ProductoUsuario editarProductoUsuario(@PathVariable UUID id, 
        @RequestBody ProductoUsuario productoUsuarioDetalles) {

         Optional<ProductoUsuario> optionalProductoUsuario = productoUsuarioRepository.findById(id);
    
          if (optionalProductoUsuario.isPresent()) {
                ProductoUsuario productoUsuario = optionalProductoUsuario.get();
                productoUsuario.setNumeroSerie(productoUsuarioDetalles.getNumeroSerie());
                productoUsuario.setFechaCompra(productoUsuarioDetalles.getFechaCompra());
                productoUsuario.setFechaUltimoMantenimiento(productoUsuarioDetalles.getFechaUltimoMantenimiento());
                return productoUsuarioRepository.save(productoUsuario);
          } else {
                return null;
          } 
     }
    
   @DeleteMapping("/{id}")
    public void eliminarProductoUsuario(@PathVariable UUID id) {
          productoUsuarioRepository.deleteById(id);
    }
    
    
}
