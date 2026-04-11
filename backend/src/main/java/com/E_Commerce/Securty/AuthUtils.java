package com.E_Commerce.Securty;

import com.E_Commerce.Config.RequestUserContext;
import com.E_Commerce.Entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AuthUtils {
   private final RequestUserContext requestUserContext;

    public User getLoggedInUser() {
        return requestUserContext.getCurrentUser();
    }
}
