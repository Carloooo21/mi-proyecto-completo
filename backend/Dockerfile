# Etapa de Build
FROM maven:3.9.10-eclipse-temurin-24 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn clean package -DskipTests
COPY src ./src
RUN mvn clean package -DskipTests

# Etapa de Runtime
FROM openjdk:24-jdk-slim AS runtime
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]
