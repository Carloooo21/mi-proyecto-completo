# --- ETAPA 1: Build (compilación) ---
# Usamos imagen oficial de Maven con Eclipse Temurin JDK 24 (válido en 2025)
FROM maven:3.10-eclipse-temurin-24 AS build

WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY . .
RUN mvn clean package -DskipTests

# --- ETAPA 2: Runtime (ejecución) ---
# Usamos Amazon Corretto 24 con Alpine (etiqueta válida)
FROM amazoncorretto:24.0.1-alpine3.18 AS runtime

WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]