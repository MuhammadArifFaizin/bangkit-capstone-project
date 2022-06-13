package com.example.mential

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.mential.databinding.ActivityResultDisgustBinding


class ResultDisgust : AppCompatActivity() {

    private lateinit var binding: ActivityResultDisgustBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding= ActivityResultDisgustBinding.inflate(layoutInflater)
        setContentView(R.layout.activity_result_disgust)

        binding.btnResultdisgust.setOnClickListener{
            startActivity(Intent(this@ResultDisgust, HomepageActivity::class.java))
        }
    }
}