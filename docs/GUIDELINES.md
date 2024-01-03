# Proyecto Final DDD con CQRS

Vamos a realizar el back-end de un proyecto utilizando DDD y CQRS, implementando al menos 2 casos de uso (1 Command y 1 Query).

Los pre-requisitos en cuanto a conocimiento son:

- Clean Code
- Principios de diseño (SOLID y YAGNI principalmente)
- Patrones de diseño
- Clean Architecture (DDD, CQRS y Event Driven Architecture)
- TypeScript
- Testing con Jest

## Fases del proyecto

El proyecto tendrá las siguientes fases:

1. **Descripción e idea del proyecto (Domingo 23 de Julio)**: Esta fase consiste en definir la idea y en describir tanto el proyecto como la empresa. El formato será en markdown dentro del proyecto con el nombre `IDEA.md`
2. **Definición de los Bounded Context**: En esta fase se definirán los diferentes contextos funcionales del proyecto utilizando el método de **Event Storming**. Se debe entregar en el repo un draw.io o cualquier diagrama donde se especifiquen los diferentes Bounded Context, añadiendolo al readme del proyecto [Cheat Sheet Event Storming](https://github.com/ddd-crew/eventstorming-glossary-cheat-sheet)
3. **Identificación del dominio**: Elegiremos dos bounded Contexts, siendo al menos uno de ellos el que vayamos a implementar y realizaremos un diagrama que añadiremos al README.md del proyecto con los elementos de Dominio identificados (Entidades, Value Objects, Aggregates, Domain Events and repositories abstraction). Además deberemos identificar las validaciones en esta capa

Realizar la implementación del dominio de ambos bounded context en TypeScript.

4. **Identificación de la capa de aplicación**: Identificar los casos de uso de los bounded contexts elegidos en un listado, escrito dentro del README.md del proyecto.

Además crearemos dos **Diagramas de casos de uso**, uno para un Comando y otro para la Query.

Realizar la implementación de estos dos casos de uso.

**En esta fase todavía no hace falta implementar los repositories o el bus de eventos**, podemos usar las abstracciones

5. **Añadir la capa de infraestructura y adapters**: Implementar los repositorios, event bus y mappers de esta capa.

Los casos de uso deben poder estar disponibles via **REST API** o **GraphQL**

## Stack Tecnológico

Para la implementación debemos usar el siguiente Stack Tecnológico:

- **Github**: Como herramienta de versionado de código y CI/CD (Github Actions)
- **SonarQube**: Como herramienta de calidad de código y clean code. Siempre debemos mantener sonar "limpio" y con un 80% de cobertura, siendo un 100% al final del proyecto
- **Eslint, Prettier y hooks**: Como herramienta de análisis de código y gestión del formato.
- **TypeScript**: Superset del lenguaje de programación de JavaScript. **No debemos tener `any` en nuestra implementación**
- **Express** o **NestJS**: Como librería/framework para la implementación del API REST
- **GraphQL**: Como librería para la implementación del API GraphQL
- **Redis**: Como servidor de cache para la implementación de CQRS. Podéis encontrar un cloud gratuito en el propio redis. Podéis usar otras alternativas que encontréis. [https://redis.com/redis-enterprise-cloud/pricing/](https://redis.com/redis-enterprise-cloud/pricing/)
- **Kaftka** o **RabbitMQ** o **nats**: Para la implementación de un bus de eventos en la implementación de Event Driven Architecture. Buscad un cloud gratuito de instancias. Por ejemplo para kaftka: [https://www.conduktor.io/pricing/](https://www.conduktor.io/pricing/)
- **MongoDB** o otra **SQL Database (PostgreSQL, MySQL, ...)**: Como DDBB, podéis elegir una, otra o ambas. Podéis buscar un cloud gratuito para el servidor, como por ejemplo [Atlas](https://www.mongodb.com/es/atlas/database)
- **bitloops** (OPTIONAL): podéis usar esta librería para la ayuda en la implementación de DDD.

# Bonus:

- Docker, K8s, nginx, terraform.

## Entrega

La entrega consistirá en un repositorio de Github con las entregas de documentación, el código, las instrucciones para su ejecución y las URL's de las API's tanto Rest como GraphQL.

A nivel de despliegue podéis entregar también dentro de un repo un Docker Compose para poder levantar el entorno en local.

Se presentará en la graduación el día 15 de Septiembre, donde tendremos una primera parte donde enseñaremos nuestros contextos y dominios y otra segunda parte donde enseñaremos el flujo del comando en código.

El tiempo máximo de presentación serán 20 minutos.

## References

- [White label ddd demo repo](https://github.com/stemmlerjs/white-label/tree/master/src)
- [Intro DDD](https://khalilstemmler.com/articles/domain-driven-design-intro/)
- [Clean Architecture](https://khalilstemmler.com/articles/enterprise-typescript-nodejs/clean-nodejs-architecture/)
- [App Organization](https://khalilstemmler.com/articles/software-design-architecture/organizing-app-logic/)
- [Entities](https://khalilstemmler.com/articles/typescript-domain-driven-design/entities/)
- [Value Object](https://khalilstemmler.com/articles/typescript-value-object/)
- [Aggregados](https://khalilstemmler.com/articles/typescript-domain-driven-design/aggregate-design-persistence/)
- [Repositories](https://khalilstemmler.com/articles/typescript-domain-driven-design/repository-dto-mapper/)
- [Casos de uso](https://khalilstemmler.com/articles/enterprise-typescript-nodejs/application-layer-use-cases/)
- [Domain Events](https://khalilstemmler.com/articles/typescript-domain-driven-design/chain-business-logic-domain-events/)
