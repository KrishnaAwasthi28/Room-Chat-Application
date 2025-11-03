# Use an OpenJDK base image
FROM openjdk:26-slim-bookworm

# Set working directory
WORKDIR /app

# Copy jar file (replace target/*.jar with your actual jar name)
COPY target/chat-app-backend-0.0.1-SNAPSHOT.jar app.jar

# Expose the port your Spring Boot runs on
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java","-jar","app.jar"]