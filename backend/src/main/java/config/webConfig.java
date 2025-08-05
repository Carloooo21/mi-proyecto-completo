package config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
public class webConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // permite todas las rutas
                .allowedOrigins("http://localhost:3000") // permite solo tu frontend
                .allowedMethods("GET", "POST", "PUT", "DELETE") // permite estos métodos
                .allowedHeaders("*");
    }
}