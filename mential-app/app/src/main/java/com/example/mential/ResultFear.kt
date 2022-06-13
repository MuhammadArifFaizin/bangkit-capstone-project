package com.example.mential

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.mential.databinding.ActivityResultFearBinding


class ResultFear : AppCompatActivity() {
    private lateinit var binding: ActivityResultFearBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding= ActivityResultFearBinding.inflate(layoutInflater)
        setContentView(R.layout.activity_result_fear)

        binding.btnResultfear.setOnClickListener{
            startActivity(Intent(this@ResultFear, HomepageActivity::class.java))
        }

    }
}