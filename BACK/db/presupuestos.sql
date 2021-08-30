CREATE DATABASE presupuestosdb
GO

USE presupuestosdb
GO

CREATE TABLE presupuestos (
  id INT NOT NULL IDENTITY (1,1),
  fecha_creacion VARCHAR(11) NOT NULL,
  proyecto VARCHAR(50) NOT NULL,
  versión VARCHAR(5) NOT NULL,
  
  PRIMARY KEY (id)
)
-----------------------------------
CREATE TABLE concepto_ingresos (
  id INT NOT NULL IDENTITY (1,1),
  concepto VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
)

CREATE TABLE ingresos (
  id INT NOT NULL IDENTITY(1,1),
  id_concepto INT NOT NULL,
  id_presupuesto INT NOT NULL,
  fecha VARCHAR(11) NOT NULL,
  monto float NOT NULL,
  
  PRIMARY KEY (id),
  FOREIGN KEY (id_concepto) REFERENCES concepto_ingresos(id),
  FOREIGN KEY (id_presupuesto) REFERENCES presupuestos(id)
)
-------------------------------------------------------------------

CREATE TABLE concepto_costos_directos (
  id INT NOT NULL IDENTITY (1,1),
  concepto VARCHAR(50) NOT NULL,
  
  PRIMARY KEY (id)
  
)

CREATE TABLE costos_directos (
  id INT NOT NULL IDENTITY(1,1),
  id_concepto INT NOT NULL,
  id_presupuesto INT NOT NULL,
  fecha VARCHAR(11) NOT NULL,
  monto float NOT NULL
  
  PRIMARY KEY (id),
  FOREIGN KEY (id_concepto) REFERENCES concepto_costos_directos(id),
  FOREIGN KEY (id_presupuesto) REFERENCES presupuestos(id)
)
--------------------------------------------------------------------------


CREATE TABLE concepto_gastos_admon (
  id INT NOT NULL IDENTITY (1,1),
  concepto VARCHAR(50) NOT NULL,
  
  PRIMARY KEY (id)
  
)

CREATE TABLE gastos_admon (
  id INT NOT NULL IDENTITY(1,1),
  id_concepto INT NOT NULL,
  id_presupuesto INT NOT NULL,
  fecha VARCHAR(11) NOT NULL,
  monto float NOT NULL
  
  PRIMARY KEY (id),
  FOREIGN KEY (id_concepto) REFERENCES concepto_gastos_admon(id),
  FOREIGN KEY (id_presupuesto) REFERENCES presupuestos(id)
)

---------------------------------------------------------------------
	CREATE TABLE concepto_recursos (
	  id INT NOT NULL IDENTITY (1,1),
	  concepto VARCHAR(50) NOT NULL,

	  PRIMARY KEY (id)
	)

CREATE TABLE recursos (
  id INT NOT NULL IDENTITY(1,1),
  id_concepto INT NOT NULL,
  id_presupuesto INT NOT NULL,
  fecha VARCHAR(11) NOT NULL,
  monto float NOT NULL,
  porcentaje float NOT NULL,
  
  PRIMARY KEY (id),
  FOREIGN KEY (id_concepto) REFERENCES recursos(id),
  FOREIGN KEY (id_presupuesto) REFERENCES presupuestos(id)

)
