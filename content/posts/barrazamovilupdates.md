---
date: 2020-12-04
title: 'Actualización en Barraza Movil'
tags: ['React Native', 'JavaScript', 'GIS']
published: true
cover_image: ./images/logobm.png
canonical_url: false
description: 'Una nota para ponerlos al día sobre el proyecto Barraza Móvil.'
---

Buenos dias compañeros de IT. 

Como ustedes saben he estado trabajando en la actualización y mejora de Barraza Movil, la aplicación que fue concebida para ayudar a los vendedores y supervisores a un mejor control y acceso geográfico de los clientes de la empresa. La aplicación ha demostrado ser útil en los temas de captura de datos de clientes nuevos y actualizaciones en campo de varios fragmentos de información sobre nuestros clientes que son muy necesarios para ofrecer un mejor servicio de ventas. Ha agilizado el proceso de inserción de prospectos activos a SAP mediante plataformas administrativas web que se comunican directamente con Barraza Móvil y que son operadas internamente por el personal de cobros y ha ayudado a vendedores nuevos o auxiliares a localizar y determinar la ubicación exacta de los clientes en cada ruta. Barraza Móvil sufrió una baja debido al modo cómo se había estado distribuyendo su instalación: mediante el cliente Expo de la plataforma de desarrollo elegida (https://expo.io/). La ventaja de este método era un despliegue centralizado mediante conexión a internet en los dispositivos, así como actualización OTA (over the air) recibidas al instante, una vez se hacia un push de los cambios más recientes al código fuente. La desventaja principal es que la aplicación debía mantenerse al día con las versiones más recientes del cliente Expo. 

Mi trabajo mas reciente consistió en migrar profundamente el código fuente al SDK39 de Expo, que es el mas reciente (la version 40 esta en beta). Adicionalmente añadí mejoras a las funcionalidades originales de la aplicación. 

El cambio más relevante a partir de ahora será el método de distribución de la aplicación en producción: se generará un apk que podrá ser instalado remotamente mediante Scalefusion. Esto significa que Barraza Móvil se ejecutará nativamente y de manera independiente. No se requerirá Expo para tal efecto.

Por otro lado, el siguiente proyecto en la línea de Barraza Móvil es rediseñar, recodificar y reconstruir enteramente Barraza Móvil utilizando una nueva y novedosa plataforma de desarrollo denominada Flutter (https://flutter.dev/). El objetivo de este proyecto de migración es crear una aplicación que tendrá mejores aspectos de diseño, rendimiento y optimización, interfaz de usuario mejorada y tendrá completa compatibilidad con dispositivos y sistemas operativos recientes. Flutter es una tecnología de desarrollo multiplataforma creada por Google. Esto dará lugar a futuros proyectos interesantes tales como: recreación de MapSales como aplicación nativa para dispositivos con Android e iOS desarrollado en Flutter.

>Tu tiempo es limitado, así que no lo malgastes viviendo la vida de otro… Vive tu propia vida. Todo lo demás es secundario. -Steve Jobs