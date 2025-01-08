# Usar la imagen oficial de PostgreSQL
FROM postgres:latest

# Copiar el archivo de respaldo al contenedor
COPY database_backup.sql /docker-entrypoint-initdb.d/

# Exponer el puerto 5432
EXPOSE 5432

# Iniciar el servicio de PostgreSQL
CMD ["postgres"]