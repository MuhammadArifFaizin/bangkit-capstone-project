package com.example.mential

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.mential.databinding.ActivityResultSadBinding

class ResultSad : AppCompatActivity() {

    private lateinit var binding:ActivityResultSadBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding= ActivityResultSadBinding.inflate(layoutInflater)
        setContentView(R.layout.activity_result_sad)

        binding.btnResultsad.setOnClickListener{
            startActivity(Intent(this@ResultSad, HomepageActivity::class.java))
        }

    }
}