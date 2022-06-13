package com.example.mential

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.mential.databinding.ActivityResultAngryBinding

class ResultAngry : AppCompatActivity() {

    private lateinit var binding: ActivityResultAngryBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding= ActivityResultAngryBinding.inflate(layoutInflater)
        setContentView(R.layout.activity_result_angry)

        binding.btnResultangry.setOnClickListener{
            startActivity(Intent(this@ResultAngry, HomepageActivity::class.java))
        }

    }
}