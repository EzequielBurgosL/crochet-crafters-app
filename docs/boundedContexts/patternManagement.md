# Bounded Context 1: Gestión de Patrones

## Análisis de Dominio:

En este contexto, nos enfocamos en la gestión de patrones de crochet. Esto incluye la creación, edición, almacenamiento y búsqueda de patrones de crochet. Algunos conceptos clave en este contexto:

Patrón de Crochet
Instrucciones
Nivel de Dificultad
Categorías de Patrones (por ejemplo, amigurumi, mantas, ropa)
Usuario Registrado (para guardar patrones personalizados)

## Modelado de los elementos del dominio:

### Value Objects:

Patrón de Crochet: Entidad que contiene atributos como nombre, instrucciones y categoría.
Instrucciones: Describe los pasos para tejer un patrón de crochet.
Nivel de Dificultad: Complejidad de un patrón dentro un rango de categorías.
Categorías de Patrones: Nombres y atributos relacionados con las categorías de los patrones (por ejemplo, "amigurumi", "mantas", "ropa").

### Entities:

Usuario Registrado: Un usuario registrado que guarda patrones personalizados es una entidad, ya que tiene una identidad única y se puede acceder y modificar a lo largo del tiempo.

### Agregados:

En este contexto, podría haber un agregado principal que incluya múltiples entidades y value objects relacionados. Por ejemplo:

Agregado de Patrón de Crochet: Este agregado podría incluir un Patrón de Crochet (como Value Object), las Instrucciones (Value Object), la Categoría (Value Object) y posiblemente una referencia al Usuario Registrado que creó o modificó el patrón. Este agregado representa un patrón de crochet completo y todos sus detalles relacionados.

## Casos de Uso:

**Crear Patrón**: Un usuario puede crear un nuevo patrón de crochet. Debe proporcionar un nombre, instrucciones detalladas y categorizar el patrón.
**Editar Patrón**: Un usuario puede editar un patrón existente, modificando las instrucciones o la categoría.
**Buscar Patrón**: Los usuarios pueden buscar patrones por nombre, categoría o nivel de dificultad.
**Guardar Patrón**: Los usuarios registrados pueden guardar patrones en su colección personal.
**Eliminar Patrón**: Un usuario puede eliminar un patrón que ya no necesita.
