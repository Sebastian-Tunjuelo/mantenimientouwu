-- Script de datos de ejemplo para la base de datos de mantenimiento
-- Este archivo se ejecutará automáticamente al iniciar Spring Boot

-- Eliminar datos existentes (opcional, comentar si no quieres limpiar)
-- DELETE FROM mantenimientos;
-- DELETE FROM producto_usuario;
-- DELETE FROM productos;
-- DELETE FROM usuarios;

-- Insertar usuarios de ejemplo
INSERT INTO usuarios (id_usuario, nombre, apellido, email, contraseña, telefono, create_at) 
VALUES 
    (gen_random_uuid(), 'Juan', 'Pérez', 'juan@example.com', 'password123', '3001234567', NOW()),
    (gen_random_uuid(), 'María', 'González', 'maria@example.com', 'password123', '3009876543', NOW())
ON CONFLICT (email) DO NOTHING;

-- Insertar productos de ejemplo
INSERT INTO productos (id_producto, tipo_dispositivo, marca, modelo, detalle, gasto_energia, vida_util, imagen_url, create_at) 
VALUES 
    (
        gen_random_uuid(),
        'Refrigerador',
        'Samsung',
        'RT38K5930SL',
        'Refrigerador No Frost de 384 litros con tecnología Twin Cooling Plus. Incluye dispensador de agua y hielo.',
        450.0,
        15,
        'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=500',
        NOW()
    ),
    (
        gen_random_uuid(),
        'Lavadora',
        'LG',
        'WM3900HWA',
        'Lavadora de carga frontal de 23 kg con tecnología TurboWash. Incluye función de vapor y Wi-Fi.',
        280.0,
        12,
        'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500',
        NOW()
    ),
    (
        gen_random_uuid(),
        'Aire Acondicionado',
        'Carrier',
        '53QHC012',
        'Aire acondicionado split de 12,000 BTU con tecnología inverter. Clasificación energética A+++.',
        1200.0,
        10,
        'https://images.unsplash.com/photo-1631545806609-4c0d1b1f4a3d?w=500',
        NOW()
    ),
    (
        gen_random_uuid(),
        'Microondas',
        'Panasonic',
        'NN-SN966S',
        'Horno microondas de 2.2 pies cúbicos con tecnología Cyclonic Wave. Potencia de 1250W.',
        1250.0,
        8,
        'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=500',
        NOW()
    ),
    (
        gen_random_uuid(),
        'Estufa',
        'Whirlpool',
        'WFE515S0ES',
        'Estufa eléctrica de 5 quemadores con horno de convección. Capacidad de 5.3 pies cúbicos.',
        3000.0,
        15,
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500',
        NOW()
    ),
    (
        gen_random_uuid(),
        'Lavavajillas',
        'Bosch',
        'SHPM65Z55N',
        'Lavavajillas silencioso de 44 dBA con 16 servicios. Incluye ciclo de sanitización.',
        320.0,
        10,
        'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=500',
        NOW()
    ),
    (
        gen_random_uuid(),
        'Secadora',
        'Samsung',
        'DV45H7000EW',
        'Secadora a gas de 7.4 pies cúbicos con tecnología de sensor de humedad.',
        250.0,
        12,
        'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500',
        NOW()
    ),
    (
        gen_random_uuid(),
        'Aspiradora',
        'Dyson',
        'V11 Torque Drive',
        'Aspiradora sin cable con motor digital V11. Hasta 60 minutos de autonomía.',
        545.0,
        7,
        'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500',
        NOW()
    ),
    (
        gen_random_uuid(),
        'Ventilador',
        'Honeywell',
        'HT-900',
        'Ventilador turbo de alto rendimiento. Circulación de aire hasta 6 metros.',
        45.0,
        10,
        'https://images.unsplash.com/photo-1563741991-0f43c0e69e26?w=500',
        NOW()
    ),
    (
        gen_random_uuid(),
        'Calentador de Agua',
        'Rheem',
        'RTEX-13',
        'Calentador de agua eléctrico sin tanque. Flujo de 4 GPM.',
        13000.0,
        20,
        'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=500',
        NOW()
    ),
    (
        gen_random_uuid(),
        'Batidora',
        'KitchenAid',
        'KSM150PSER',
        'Batidora de pie de 5 cuartos con 10 velocidades. Incluye 3 accesorios.',
        325.0,
        12,
        'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500',
        NOW()
    ),
    (
        gen_random_uuid(),
        'Cafetera',
        'Breville',
        'BES870XL',
        'Máquina de espresso con molinillo integrado. Presión de 15 bares.',
        1600.0,
        8,
        'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500',
        NOW()
    ),
    (
        gen_random_uuid(),
        'Licuadora',
        'Vitamix',
        'E310',
        'Licuadora profesional de 2 HP. Jarra de 1.4 litros sin BPA.',
        1200.0,
        10,
        'https://images.unsplash.com/photo-1585515320310-259814833e62?w=500',
        NOW()
    ),
    (
        gen_random_uuid(),
        'Horno Tostador',
        'Cuisinart',
        'TOA-60',
        'Horno tostador con freidora de aire. Capacidad de 0.6 pies cúbicos.',
        1800.0,
        7,
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500',
        NOW()
    ),
    (
        gen_random_uuid(),
        'Procesador de Alimentos',
        'Cuisinart',
        'DFP-14BCNY',
        'Procesador de alimentos de 14 tazas con motor de 720W.',
        720.0,
        10,
        'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500',
        NOW()
    );

