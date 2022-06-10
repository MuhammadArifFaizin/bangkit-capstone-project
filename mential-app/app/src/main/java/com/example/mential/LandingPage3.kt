package com.example.mential

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.mential.databinding.ActivityLandingPage3Binding
import com.example.mential.databinding.ActivitySplashScreenBinding

class LandingPage3 : AppCompatActivity() {
    private lateinit var binding: ActivityLandingPage3Binding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityLandingPage3Binding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.btnSignupLanding3.setOnClickListener{
            startActivity(Intent(this@LandingPage3, SignupActivity::class.java))
        }

        binding.btnLoginLanding3.setOnClickListener{
            startActivity(Intent(this@LandingPage3, LoginActivity::class.java))
        }
    }
}