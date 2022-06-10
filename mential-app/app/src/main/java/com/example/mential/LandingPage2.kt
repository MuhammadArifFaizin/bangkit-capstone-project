package com.example.mential

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.mential.databinding.ActivityLandingPage2Binding

class LandingPage2 : AppCompatActivity() {
    private lateinit var binding: ActivityLandingPage2Binding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityLandingPage2Binding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.btnNext2.setOnClickListener{
            startActivity(Intent(this@LandingPage2, LandingPage3::class.java))
        }

        binding.btnSkip2.setOnClickListener{
            startActivity(Intent(this@LandingPage2, LandingPage3::class.java))
        }
    }
}