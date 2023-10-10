INSERT INTO `brands` (`id`,`name`) VALUES
(1, 'Samsung'),
(2, 'Motorola'),
(3, 'TCL'),
(4, 'Xiaomi');

INSERT INTO `categories` (`id`,`name`) VALUES
(1,'Vehiculos'),
(2,'Inmuebles'),
(3,'Supermercado'),
(4,'Tecnologia'),
(5,'Hogar y muebles'),
(6,'Electrodomesticos'),
(7,'Herramientas'),
(8,'Construccion'),
(9,'Deportes y fitness'),
(10,'Accesorios para vehiculos'),
(11,'Moda'),
(12,'Juegos y juguetes'),
(13,'Bebes'),
(14,'Belleza y cuidado personal'),
(15,'Salud y equipamiento medico'),
(16,'Industrias y oficinas'),
(17,'Agro'),
(18,'Productos sustentables'),
(19,'Servicios');

INSERT INTO `type` (`id`,`name`) VALUES
(1,'Producto'),
(2,'Vehiculos'),
(3,'Inmuebles'),
(4,'Servicios');

INSERT INTO `users` (`id`,`type`,`firstName`,`lastName`,`email`,`province`,`age`,`password`,`image`,`status`) VALUES
(1,1,'Nicolás','Cabrera','nico@gmail.com','La Rioja',30,1234,'\img\imgUsers\foto perfil.jpg',1),
(2,1,'Lionel','Messi','messi@gmail.com','Santa Fe',35,12345,'\img\imgUsers\messi foto perfil.jpg',1);

INSERT INTO `carts` (`id`,`userId`, `name`) VALUES
(1,1,'compra 1'),
(2,1,'compra 2'),
(3,1,'compra 3');

INSERT INTO `products` (`id`,`name`,`description`,`brandId`,`image`,`status`,`price`) VALUES
(1,'Celular moto g6','Es un celular barato y muy bonito el cual tiene incorporado una camara de 100px',2,'\img\images\imgProducts\moto g6.jpg',1,120000),
(2,'Celular A 11','Es un celular caro y muy bonito el cual tiene incorporado una camara de 200px',1,'\img\images\imgProducts\A 11.jpg',1,60000);

INSERT INTO `cartproduct` (`id`,`productId`,`cartId`,`productPrice`,`quantity`) VALUES
(1,1,1,500,1),
(2,2,2,1000,1),
(3,1,3,1500,1),
(4,2,1,2000,2);

INSERT INTO `categoryproduct` (`id`,`productId`,`categoryId`) VALUES
(1,1,2),
(2,2,1);

INSERT INTO `typeproduct` (`id`,`typeId`,`productId`) VALUES
(1,1,1),
(2,1,1);

