# --- Build (compilación) ---
FROM maven:3.9.10-eclipse-temurin-24 AS build
WORKDIR /app

# Copia POM y código fuente
COPY pom.xml .
COPY src ./src

# Construye el JAR
RUN mvn clean package -DskipTests

# --- Runtime (ejecución) ---
FROM openjdk:24-jdk-slim AS runtime
WORKDIR /app

COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]
