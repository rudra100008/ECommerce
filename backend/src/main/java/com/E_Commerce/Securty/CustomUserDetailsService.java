package com.E_Commerce.Securty;

import com.E_Commerce.Entity.Role;
import com.E_Commerce.Entity.User;
import com.E_Commerce.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {
    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username)
                .orElseThrow(()-> new UsernameNotFoundException("Email not found: "+ username));
        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword(),
                mapRoleToAuthorites(user.getRoles())

        );
    }

    private Collection<? extends GrantedAuthority> mapRoleToAuthorites(Collection<Role> roles){
        return roles.stream()
                .map(role -> new SimpleGrantedAuthority(role.getRoleName().name())).toList();
    }
}
//Collection<GrantedAuthority> means: a collection that contains GrantedAuthority objects.
//Collection<? extends GrantedAuthority> means:
// a collection that contains objects of type GrantedAuthority or any subclass of it.