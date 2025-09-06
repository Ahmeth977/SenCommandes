FROM php:8.2-apache

# Copier les fichiers de l'application
COPY . /var/www/html/

# Configurer Apache pour utiliser le port de Cloud Run
RUN echo "Listen \${PORT}" > /etc/apache2/ports.conf
RUN a2enmod rewrite

# Définir le document root
ENV APACHE_DOCUMENT_ROOT /var/www/html
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# Exposer le port (Cloud Run utilisera le port défini par la variable PORT)
EXPOSE 8080