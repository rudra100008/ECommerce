package com.E_Commerce.Config;

import com.github.benmanes.caffeine.cache.Caffeine;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.CachingConfigurer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.caffeine.CaffeineCacheManager;
import org.springframework.cache.interceptor.CacheErrorHandler;
import org.springframework.cache.interceptor.SimpleCacheErrorHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;
import java.util.concurrent.TimeUnit;

@Configuration
@EnableCaching
public class CacheConfig implements CachingConfigurer {

    @Bean
    public CacheManager cacheManager(){
        CaffeineCacheManager cacheManager = new CaffeineCacheManager();

        cacheManager.registerCustomCache("products",
                Caffeine.newBuilder()
                        .maximumSize(500)
                        .expireAfterAccess(1,TimeUnit.HOURS)
                        .recordStats()
                        .build());

        cacheManager.registerCustomCache("categories",
                Caffeine.newBuilder()
                        .maximumSize(200)
                        .expireAfterAccess(1,TimeUnit.HOURS)
                        .recordStats()
                        .build());

        cacheManager.registerCustomCache("users",
                Caffeine.newBuilder()
                        .maximumSize(200)
                        .expireAfterWrite(30,TimeUnit.MINUTES)
                        .recordStats()
                        .build());

        cacheManager.registerCustomCache("orders",
                Caffeine.newBuilder()
                        .maximumSize(200)
                        .expireAfterWrite(10,TimeUnit.MINUTES)
                        .recordStats()
                        .build());
        cacheManager.registerCustomCache("provinces",
                Caffeine.newBuilder()
                        .maximumSize(200)
                        .expireAfterAccess(1,TimeUnit.HOURS)
                        .recordStats()
                        .build());

        cacheManager.registerCustomCache("municipalities",
                Caffeine.newBuilder()
                        .maximumSize(200)
                        .expireAfterAccess(1,TimeUnit.HOURS)
                        .recordStats()
                        .build());
        cacheManager.registerCustomCache("districts",
                Caffeine.newBuilder()
                        .maximumSize(200)
                        .expireAfterAccess(1,TimeUnit.HOURS)
                        .recordStats()
                        .build());
        return  cacheManager;
    }


    @Bean
    public CacheErrorHandler cacheErrorHandler(){
        return new SimpleCacheErrorHandler();
    }
}
