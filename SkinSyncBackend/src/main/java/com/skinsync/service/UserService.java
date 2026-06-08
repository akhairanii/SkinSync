package com.skinsync.service;
import com.skinsync.entity.User;
import com.skinsync.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User register(User user) {
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElse(null);
    }
    public User login(String email, String password) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Email tidak ditemukan"));

        if (!user.getPassword().equals(password)) {
            throw new RuntimeException("Password salah");
        }

        return user;
    }
}