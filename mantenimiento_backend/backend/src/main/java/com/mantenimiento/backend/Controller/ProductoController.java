package com.mantenimiento.backend.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mantenimiento.backend.Repository.ProductoRepository;
import com.mantenimiento.backend.model.Producto;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "http://localhost:5173") //Para que se conecte desde react
public class ProductoController {
    
    @Autowired ProductoRepository productoRepository; //Inyección del repositorio

    @GetMapping
    public List<Producto> listaProductos() {
        return productoRepository.findAll();
        }

    @PostMapping()
    public Producto crearProducto(@RequestBody Producto producto) {
        return productoRepository.save(producto);
    }

    @PostMapping("/{id}")
    public Producto editarProducto(@PathVariable Long id, @RequestBody Producto productoDetalles) {

         Optional<Producto> optionalProducto = productoRepository.findById(id);
    
          if (optionalProducto.isPresent()) {
                Producto producto = optionalProducto.get();
                producto.setTipoDispositivo(productoDetalles.getTipoDispositivo());
                producto.setMarca(productoDetalles.getMarca());
                producto.setModelo(productoDetalles.getModelo());
                producto.setFichaTecnica(productoDetalles.getFichaTecnica());
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
    Optional<Producto> EliminarProducto(@PathVariable Long id) {
        Optional<Producto> producto = productoRepository.findById(id);

        if (producto.isPresent()) {
            productoRepository.deleteById(id);
            return producto;
        } else{
          return null;
        }   
    }
    
    
    

}
