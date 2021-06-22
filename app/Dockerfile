FROM php:7.4-fpm-buster
# install composer
RUN cd /usr/bin && curl -s http://getcomposer.org/installer | php && ln -s /usr/bin/composer.phar /usr/bin/composer
RUN apt-get update \
&& apt-get install -y \
git \
zip \
unzip \
vim \
libonig-dev \
libzip-dev
RUN apt-get update \
    && apt-get install -y libpq-dev \
    && docker-php-ext-install pdo_mysql pdo_pgsql
RUN curl -SL https://deb.nodesource.com/setup_16.x | bash
RUN apt-get install -y nodejs
RUN npm install npm@latest -g
WORKDIR /var/www/html