CREATE DATABASE usersdb
GO

USE usersdb
GO

CREATE TABLE usuarios (
  id INT NOT NULL IDENTITY (1,1),
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  usuario VARCHAR(10) NOT NULL,
  correo VARCHAR(50) not null,
  password VARCHAR(15) NOT NULL,

  PRIMARY KEY (id)
)


CREATE TABLE informacion_pagos (
  id INT NOT NULL,
  usuario_id INT NOT NULL,
  etiqueta INT NOT NULL identity(1,1),
  tarjeta  INT NOT NULL,
  calle VARCHAR(25) NOT NULL,
  colonia VARCHAR(30) NOT NULL,
  num_ext INT NOT NULL,
  num_int INT,
  cp INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (usuario_id) REFERENCES USUARIOS(ID)
)

CREATE TABLE direcciones_envio (
  id INT NOT NULL,
  calle VARCHAR(25) NOT NULL,
  colonia VARCHAR(30) NOT NULL,
  num_ext INT NOT NULL,
  num_int INT,
  cp INT NOT NULL,
  referencias VARCHAR(200),
  etiqueta INT NOT NULL identity(1,1),
  usuario_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (usuario_id) REFERENCES USUARIOS(ID)
)