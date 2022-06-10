package com.example.mential

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import com.example.mential.databinding.ActivityLandingPage1Binding
import com.example.mential.databinding.ActivityLandingPage3Binding

class LandingPage1 : AppCompatActivity() {
    private lateinit var binding: ActivityLandingPage1Binding

    var btnNext: Button? = null
    var btnSkip: Button? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityLandingPage1Binding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.btnNext1.setOnClickListener{
            startActivity(Intent(this@LandingPage1, LandingPage2::class.java))
        }

        binding.btnSkip1.setOnClickListener{
            startActivity(Intent(this@LandingPage1, LandingPage3::class.java))
        }
    }
}