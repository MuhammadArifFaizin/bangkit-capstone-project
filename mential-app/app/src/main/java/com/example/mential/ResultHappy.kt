package com.example.mential

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.mential.databinding.ActivityResultHappyBinding

class ResultHappy : AppCompatActivity() {
    private lateinit var binding: ActivityResultHappyBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding=ActivityResultHappyBinding.inflate(layoutInflater)
        setContentView(R.layout.activity_result_happy)

        binding.btnResulthappy.setOnClickListener{
            startActivity(Intent(this@ResultHappy, HomepageActivity::class.java))
        }
    }
}