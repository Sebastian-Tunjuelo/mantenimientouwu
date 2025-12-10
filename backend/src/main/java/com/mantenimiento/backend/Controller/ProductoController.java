package com.mantenimiento.backend.Controller;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mantenimiento.backend.Repository.ProductoRepository;
import com.mantenimiento.backend.model.Producto;




@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "http://localhost:5173") //Para que se conecte desde react
public class ProductoController {
    
    @Autowired ProductoRepository productoRepository; //Inyección del repositorio

    @GetMapping("/{id}")
    public Optional<Producto> obtenerProductoPorId(@PathVariable UUID id) {
        return productoRepository.findById(id);
    }
    @GetMapping
    public List<Producto> listaProductos() {
        return productoRepository.findAll();
        }

    @PostMapping()
    public Producto crearProducto(@RequestBody Producto producto) {
        return productoRepository.save(producto);
    }

    @PutMapping("/{id}")
    public Producto editarProducto(@PathVariable UUID id, @RequestBody Producto productoDetalles) {

         Optional<Producto> optionalProducto = productoRepository.findById(id);
    
          if (optionalProducto.isPresent()) {
                Producto producto = optionalProducto.get();
                producto.setTipoDispositivo(productoDetalles.getTipoDispositivo());
                producto.setMarca(productoDetalles.getMarca());
                producto.setModelo(productoDetalles.getModelo());
                producto.setDetalle(productoDetalles.getDetalle());
                producto.setGastoEnergia(productoDetalles.getGastoEnergia());
                producto.setVidaUtil(productoDetalles.getVidaUtil());
                producto.setImagenUrl(productoDetalles.getImagenUrl());
                return productoRepository.save(producto);
          } else {
                return null;
          } 
     }



    @DeleteMapping("/{id}")
    Optional<Producto> EliminarProducto(@PathVariable UUID id) {
        Optional<Producto> producto = productoRepository.findById(id);

        if (producto.isPresent()) {
            productoRepository.deleteById(id);
            return producto;
        } else{
          return null;
        }   
    }
    
    
    

}
