package com.E_Commerce.Config;


import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.CachingConfigurer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.caffeine.CaffeineCacheManager;
import org.springframework.cache.interceptor.CacheErrorHandler;
import org.springframework.cache.interceptor.SimpleCacheErrorHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.RedisConnectionFailureException;
import org.springframework.data.redis.cache.RedisCacheConfiguration;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.RedisSerializationContext;
import org.springframework.data.redis.serializer.StringRedisSerializer;

import java.time.Duration;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import static org.springframework.data.redis.cache.RedisCacheConfiguration.defaultCacheConfig;

@Configuration
@EnableCaching
public class CacheConfig implements CachingConfigurer {

    @Bean
    public RedisCacheConfiguration redisCacheConfiguration(){
        // Step 1 — Configure how Java objects are serialized to store in Redis
        // Redis stores bytes, not Java objects
        // So we need to tell Spring HOW to convert Java → bytes → Java

        return defaultCacheConfig()
                .serializeKeysWith(
                        // Keys stored as plain strings
                        RedisSerializationContext.SerializationPair
                                .fromSerializer(new StringRedisSerializer())
                )
                .serializeValuesWith(
                        // Values stored as JSON
                        RedisSerializationContext.SerializationPair
                                .fromSerializer(new GenericJackson2JsonRedisSerializer())
                )
                .disableCachingNullValues(); //don't cache null results
    }



    // Step 2 — Build CacheManager with per-cache TTL
    @Bean
    public CacheManager cacheManager(RedisConnectionFactory redisConnectionFactory){
        Map<String,RedisCacheConfiguration> cacheConfigurations = new HashMap<>();


        cacheConfigurations.put("products",
                defaultCacheConfig().entryTtl(Duration.ofHours(1)));
        cacheConfigurations.put("orders",
                defaultCacheConfig().entryTtl(Duration.ofMinutes(10)));
        cacheConfigurations.put("users",
                defaultCacheConfig().entryTtl(Duration.ofMinutes(30)));
        cacheConfigurations.put("categories",
                defaultCacheConfig().entryTtl(Duration.ofHours(6)));


        cacheConfigurations.put("provinces",
                defaultCacheConfig().entryTtl(Duration.ofHours(24)));

        cacheConfigurations.put("districts",
                defaultCacheConfig().entryTtl(Duration.ofHours(24)));

        cacheConfigurations.put("municipalities",
                defaultCacheConfig().entryTtl(Duration.ofHours(24)));


        return RedisCacheManager.builder(redisConnectionFactory)
                .cacheDefaults(defaultCacheConfig().entryTtl(Duration.ofMinutes(30)))
                .withInitialCacheConfigurations(cacheConfigurations)
                .build();

    }
    // Step 3 — Configure RedisTemplate for direct Redis operations (optional)
    // Not needed for basic @Cacheable but useful for custom Redis operations
    @Bean
    public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory factory) {
        RedisTemplate<String, Object> template = new RedisTemplate<>();
        template.setConnectionFactory(factory);
        template.setKeySerializer(new StringRedisSerializer());
        template.setValueSerializer(new GenericJackson2JsonRedisSerializer());
        template.setHashKeySerializer(new StringRedisSerializer());
        template.setHashValueSerializer(new GenericJackson2JsonRedisSerializer());
        return template;
    }
    @Bean
    public CacheErrorHandler cacheErrorHandler(){
        return new SimpleCacheErrorHandler();
    }
}
