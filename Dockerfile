FROM php:8.2-apache

# Copier les fichiers de l'application
COPY . /var/www/html/

# Configurer Apache pour utiliser le port de Cloud Run (8080)
RUN sed -i 's/80/8080/g' /etc/apache2/sites-available/000-default.conf /etc/apache2/ports.conf

# Définir les permissions
RUN chown -R www-data:www-data /var/www/html

# Exposer le port 8080
EXPOSE 8080